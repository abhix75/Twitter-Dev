const {TweetRepository,HashtagRepository}=require('../repository/index')

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1)); // this regex extracts hashtags
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        const alreadyPresentTags= await this.hashtagRepository.findByName(tags);
        console.log(alreadyPresentTags)
        let titleOfPresenttags = alreadyPresentTags.map(tags=>tags.title)
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag =>{
            return {title:tag,tweets:[tweet.id]}
        });
        console.log(newTags);
        const response = await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        })
        //todo create hashtags and add here
        /**
         * 
         * 1. BulkCreate in Mongoose
         * 2. Filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         * 
         */
        return tweet;
    }
}

module.exports = TweetService;