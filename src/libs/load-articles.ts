import db from "./db";

export async function loadArticles() {
  var studies: Array<any> = [];
  try {
    studies = await db.studies.findMany({
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
    console.log(studies);
  } catch (error) {
    console.error(error);
  }
  return studies;
}
