import React from 'react';
import "./About.css";
import AboutCard from './AboutCard';
import FlagIcon from '@material-ui/icons/Flag';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import Common from "./Common";
import { useSpring, animated } from 'react-spring';
function About() {
    const styles = useSpring({
        to: [
          { opacity: 1, marginLeft: 0},
        ],
        from: { opacity: 0,marginLeft: -99999},
        config:{
            delay: 2000,
        }
      })

    return (
        <>
        <animated.div style={styles}>
            <div className="about my-5">
            <h1 className="text-center mb-5">Features you’ll love</h1>
            <div className="container">
                <div className="row">
                <AboutCard
                    title="Personal touch"
                    icon={AccountCircleIcon}
                />
                <AboutCard
                    title="UNIQUE SOLUTIONS"
                    icon={FlagIcon}
                />
                <AboutCard
                    title="HELP IN PROMOTION"
                    icon={CreateIcon}
                />
                </div>
            </div>
        </div></animated.div>
        
        <div className="story">
        <div className="container py-3">
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6 py-5">
                    <Common
                        head="Our Short Story"
                    />
                    <button className="btn btn-outline-light">More about our team</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;
