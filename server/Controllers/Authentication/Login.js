import userModels from '../../Models/userModels.js'
import bcryptjs from 'bcryptjs'
const LoginPage = async(req,res)=>{
    try{
        const {email ,password } = req.body 

        if(!email || !password ){
            return res.status(500).json({
                success :false,
                message : "data is missing"
            })
        }
        const checkUser = await userModels.findOne({email});
        if(!checkUser){
            return res.status(500).json({
                success :false,
                message : "user is doesn't  exists"
            })
        }
        const verifyPassword =await bcryptjs.compare(password,checkUser.password)
        if(!verifyPassword){
            return res.status(500).json({
                success :false,
                message : "password Doesn't match"
            })
        }
        checkUser.isLoggedIn = true;
        await checkUser.save()
        const {username :Username , email: Email , role :Role , id} = checkUser
        res.status(201).json({
            success : true,
            message : "user logged in Successfully",
            data : {Username, Email , Role , id}
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            error :err.message,
            success : false,
            message :"internal server error"
        })
    }
}

export default LoginPage;