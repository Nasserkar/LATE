export const dynamic = "force-static";

export async function GET() {
  const data: any = [
    { username: "Nasser", age: 20, salary: 20000 },
    { username: "Venom", age: 23, salary: 60000 },
    { username: "Lasher", age: 14, salary: 2000 },
    { username: "Hitam", age: 20, salary: 18000 },
    { username: "Black", age: 27, salary: 80000 },
  ];

  return Response.json({ data });
}
