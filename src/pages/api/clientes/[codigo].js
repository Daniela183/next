export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        name: `John Doe ${codigo}`,
        email: `doejohn${codigo}@gfmail.com`
      
    })
    
   
  }
  