import Product from "./components/Product";
export default function Home() {
 
  return (
    <main className="mt-11 h-[80vh]">
      <div className="flex flex-col justify-center max-w-5xl m-auto">
        <Product />
      </div>
    </main>
  );
}

