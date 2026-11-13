const jwt=require('jsonwebtoken'),User=require('../models/User');
async function protect(req,res,next){try{const h=req.headers.authorization||'',t=h.startsWith('Bearer ')?h.slice(7):null;if(!t)return res.status(401).json({message:'Authentication required'});const d=jwt.verify(t,process.env.JWT_SECRET),u=await User.findById(d.id);if(!u)return res.status(401).json({message:'Invalid account'});req.user=u;next()}catch(e){res.status(401).json({message:'Invalid or expired token'})}}
const allowRoles=(...roles)=>(req,res,next)=>roles.includes(req.user?.role)?next():res.status(403).json({message:'Forbidden: insufficient role'});
module.exports={protect,allowRoles};
