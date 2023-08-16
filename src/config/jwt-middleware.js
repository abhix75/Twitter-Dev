import JWT from "passport-jwt"
import User from "../models/user.js"

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:'Twitter_Secret'
}

export const passportAuth = (passport) => {
    try {
        console.log("Inside Strategy");
        passport.use(new JwtStrategy(opts,async (jwt_payload,done) => {
            console.log("Req sent to Strategy");

            const user = await User.findById(jwt_payload.id);

            if(!user){
                done(null,false)
            }
            else{
                done(null,user);
            }
        }));
    } catch (error) {
        console.log(error)
        throw error;
    }
}