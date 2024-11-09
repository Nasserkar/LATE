async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="grid place-content-center h-screen w-full">
      hey user {id}
    </div>
  );
}

export default page;
