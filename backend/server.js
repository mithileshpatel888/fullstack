import express from   'express';

const app = express();

app.get('/', (req , res ) => {     //handling get  request at / route.
 res.send('server is ready')     //sending response  to client side with a message "Server is ready.
 });
 //  
app.get ('/api/jokes',(_req,res ) => {   // handling get request at /jokes route.
  const jokes =[   //  array of objects containing the joke and its author.
    {
      id:1,
      joke:"Why don’t scientists trust atoms? Because they make of particles.",
       author :"Mithielsh"
    },
    {
      id:2, 
      joke:`What do you call a fake noodle? An impasta.`,
      title:"This is a joke",
      content:"Its not funny."
    
    },
    {
      id:3,
      joke:`What do you call a fake noodle? An impasta.`,
      title:"This is a another joke",
      content:"It's very funny."
    }
  ];
  res.json (jokes);                           //sending json data in response .
});
    const port = process.env.port || 3000;
      //defining port.

  app.listen(port , () => {
  
  console.log(`Server at https://locallhost:${port}`);  //listening the  server  and   logging a successfull connection in the console .
});     
   
  //listening the server on defined port number.
  //specified port and logging that server is running.

