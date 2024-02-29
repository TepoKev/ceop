import { writeFile } from "fs/promises";
import fs from "fs";
import path from "path";
import db from "../../../../libs/db";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    console.log(form);
    const title: FormDataEntryValue | null = form.get("title");
    const description: FormDataEntryValue | null = form.get("description");
    const keywords: FormDataEntryValue | null = form.get("keywords");
    const studyImage: any = form.get("studyImage");
    const studyPdf: any = form.get("studyPdf");
    const publishedAt: FormDataEntryValue | null = form.get("publishedAt");
    const lastReviewAt: FormDataEntryValue | null = form.get("lastReviewAt");
    const active: FormDataEntryValue | null = form.get("active");
    const highlighted: FormDataEntryValue | null = form.get("highlighted");

    const bytesImg = await studyImage.arrayBuffer();
    const bufferImg = Buffer.from(bytesImg);

    const studyImagePath = path.join(
      process.cwd(),
      "public/images_study",
      studyImage.name
    );

    // Create directory if it does not exist
    const studyImageDir = path.dirname(studyImagePath);
    if (!fs.existsSync(studyImageDir)) {
      fs.mkdirSync(studyImageDir, { recursive: true });
    }

    writeFile(studyImagePath, bufferImg);

    const bytesPdf = await studyPdf.arrayBuffer();
    const bufferPdf = Buffer.from(bytesPdf);

    const studyPdfPath = path.join(process.cwd(), "public/pdf", studyPdf.name);

    // Create directory if it does not exist
    const studyPdfDir = path.dirname(studyPdfPath);
    if (!fs.existsSync(studyPdfDir)) {
      fs.mkdirSync(studyPdfDir, { recursive: true });
    }

    writeFile(studyPdfPath, bufferPdf);
    const image = await db.images.create({
      data: {
        name: studyImage.name,
        createAt: new Date(),
        updateAt: new Date(),
        userId: 1,
      },
    });
    console.log(active, highlighted);
    await db.studies.create({
      data: {
        title: title?.toString() as string,
        description: description?.toString() as string,
        keywords: keywords?.toString() as string,
        createAt: new Date(),
        updateAt: new Date(),
        imgId: image.id,
        userId: 1,
        pdfName: studyPdf.name,
        publishedAt: new Date(publishedAt?.toString() as string),
        lastReviewAt:
          lastReviewAt === ""
            ? null
            : new Date(lastReviewAt?.toString() as string),
        active: Boolean(active),
        highlighted: Boolean(highlighted),
      },
    });

    return Response.json({ message: "register!" });
  } catch (error) {
    return Response.error();
  }
}

export async function GET() {
  try {
    const studies = await db.studies.findMany({
      include: {
        images: {
          select: {
            name: true,
          },
        },
        users: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });
    return Response.json(studies);
  } catch (error) {
    return Response.error();
  }
}
