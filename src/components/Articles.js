import React from 'react'
import articleImage1 from '../images/article-image-1.jpg';
import emoji from '../images/emoji.jpg';
import '../css/Articles.css';
import imageSnippet from '../images/ruby-on-rails.jpg'

const Articles = () => {
    return(
        <div>
            <img src ={articleImage1} className="header-image"></img>
            
            <div  className="text-border">
            <p className="article-title">
            Why I decided to become a software developer
            </p>
           
            <p className="article-date">
                May 14, 2020
            </p>
            <p className="article">
            So, you’re stuck in a routine….. but I loved my routine, there was nothing wrong with it. 

            Even if most of the time my “tomorrow” wasn’t the thing I wanted “today”, I’ve always enjoyed my “tomorrow”, simply put, I am a happy, optimistic kind of person. 

            I’ve been a professional photographer for many years, I don’t want to say for how many, someone might guess my age (lol)…. I am still very young if you really want to know (lol…again).

            I adored my job and I still do. I’ve always been fascinated by all the new features my new cameras had, the new actions I can use in photoshop to manipulate my shots and beside all these, photography related, I’m also fond of  all the new gadgets. If I have to enumerate how many new gadgets come to life every day it’d take me many days, it’s so amazing, isn”t it? But I’ll stop here.

            So, my every day was a happy day, working with happy people, coming home, looking through the photos I took, always happy faces, enhancing them here and there, making some “plastic surgeries”, cutting some weight, anything to make my clients happy…. I never felt as though I’ve worked one day in my life. 

            So taking  photos, edit them, spend a lot of time with my family, watching movies, going out, a concert here and there… sounds like a routine, doesn’t it?….but a happy one(lol). Time went by and this February it had seemed like the world just stopped… and so did my routine. Some people called it a pandemic, some a hoax… I’m still unsure about it, but for me, it was like a pause for thinking.

            And so I realized that I’ve used my camera for so many years and I never asked myself HOW all these features that the camera has work and WHO “invented” them… I just used them. I’m sure that we all do the same, and there’s nothing wrong with it. But for me, I just felt eager to learn more about such an interesting subject.

            I googled and found out that Python has libraries with methods to manipulate images, so I decided to give it a try… and I began with Python…

            Why I didn’t do it earlier? Maybe because I was lost in my happy routine or maybe I was told that girls cannot code…

            It’s been three months of learning to code!
            </p>
            
            </div>

            <div className="title">MORE ARTICLES:</div>

            <div className= "moreArticles">
            
                <div className="articleCard">
                <a href = "https://claudiahalip.github.io/the_elegant_collection_select_method" 
                target="_blank">
                    <h4>Ruby on Rails: </h4>
                    <h4>The elegant collection_select method</h4>
                </a>
                <h5>Claudia Vamesu on July 31, 2020</h5>
                <img src={imageSnippet}></img>
                </div>

                <div className="articleCard">
                <a href = "https://claudiahalip.github.io/like_button_with_and_without_react-icons"
                target="_blank">
                    <h4>React:</h4>
                    <h4>Like button with and without react-icons</h4>
                </a>
                <h5>Claudia Vamesu on October 5, 2020</h5>
                <img src={emoji}></img>
                </div>
            </div>
        </div>
    )
}

export default Articles