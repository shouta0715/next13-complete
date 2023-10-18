export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  const product = await res.json();

  return Response.json({
    product,
  });
}

export async function POST() {
  return Response.json({
    message: "POST request received",
  });
}
