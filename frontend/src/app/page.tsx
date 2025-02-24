export default async function Home() {
  const res: Response = await fetch('http://localhost:8001');
  const data: string = await res.text(); 

  return (
    <div style={{textAlign:'center' , marginTop:'25%'}}>
      <pre>{data}</pre>
    </div>
  );
}
