import {TweetRepository,HashtagRepository} from "../repository/index.js"

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        console.log(data.content)
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                            .map((tag)=> tag.substring(1).toLowerCase()); // this regex extracts hashtags
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
        return tweet;
    }

    async get(tweetId){
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }

    async destroyTweet(tweetId){
        const tweet = await this.tweetRepository.destroy(tweetId);
        return tweet;
    }
    async update(tweetId,data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                            .map((tag)=> tag.substring(1).toLowerCase()); // this regex extracts hashtags
        console.log(tags);
        const tweet = await this.tweetRepository.update(tweetId,data);
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
        return tweet;
    }
}

export default TweetService;