import React from 'react'
import Helmet from 'react-helmet'
import discordbotexampleimg from '../assets/images/discordbotexampleimg.png'
import Layout from '../components/layout'
// import Lightbox from 'react-images'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Alex Syhabouth"
        const siteDescription = "Welcome to my site!"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">
                    <section id="one">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p>Hello, my name is Alex Syhabouth.
                            <br/><br/> 
                            I am a current student at Portland State University majoring in Mathematics and a student at Springboard's Software Engineering bootcamp.
                            <br/><br/>
                            My main competencies are in Python, JavaScript, React, and Java. (I like Python a lot)
                        </p>
                    </section>
                    <section id="two">
                        <header className="major">
                            <h2>Projects</h2>
                        </header>
                        <h3>Twitch Tracker Discord Bot : </h3>
                        <p>A discord bot that tracks when Twitch streams go live using Discord's API and Twitch's API</p>
                        <img alt="discord bot example" src={discordbotexampleimg}></img>
                        <h3>Currently working on : </h3>
                        <p>An Oregon post-tax income calculator that includes functionality for calculating time to pay off a purchase based off of current expenditures and money left over</p>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex