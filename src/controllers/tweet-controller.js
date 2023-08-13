import TweetService from "../Service/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async(req,res) => {
    try {
        const response = await tweetService.create(req.body);

        return res.status(201)
                  .json({
                    sucess:true,
                    message:'Successfully Created a new Tweet',
                    data: response,
                    err:{}
                  });
        
    } catch (error) {
        console.log(error);
        return res.status(500)
                  .json({
                    sucess:false,
                    message:'Something went wrong',
                    data: {},
                    err:error
                  });
    }
}