export default function handler(req, res) {
    if(req.method === "GET"){
        handlerGet(req, res)
    }else {
        res.status(405).send("Method not supported");
    }
    }
function handlerGet(req, res){
    res.status(200).json({
        id: 3,
        name: 'Doe',
        idade: 5
})
}
  
  