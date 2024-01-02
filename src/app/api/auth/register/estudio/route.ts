export async function POST(request: Request) {
    const form = await request.formData()
    const body = Object.fromEntries(form.entries())
    console.log(body)
    return Response.json({ message: 'register!' })
}