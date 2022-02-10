const app =  require( "./app");
const port = process.env.PORT || 3001;

console.log(`Platform : ${os.platform()}`);
console.log(`Free Memory : ${os.freemem()/(1024*1024*1024)}`)
console.log(`Total Memory : ${os.totalmem()/(1024*1024*1024)}`)

app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);