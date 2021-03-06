import React from "react";
import SidePanel from './../components/small/sidePanel'
import IphoneVideo from './../components/small/iphoneVideo'
import TabbedContent from './../components/small/tabbedContent'
import Footer from './../components/Footer'
import Cover from './../components/Cover'
import Fade from 'react-reveal/Fade'

class Soccer1 extends React.Component {
  render() {
    const coverStyle = {
      backgroundImage: `url(${this.props.cover})`
    };

    const coverContent = {
      h1: 'Soccer-1', 
      h2: 'Design and development', 
      h3: '2016 - 2017'
    };

    return (
      <div className="portfolio-feature">

        <SidePanel routerProps={this.props} />
        <Cover content={coverContent} coverId={'s1_background'} coverStyle={coverStyle} />

        <div className="scrollUpBack">
          <div className="scrollUpSection">
            <div className="overview-banner">
              <div className="banner-container">
                <p>
                  Soccer-1 was a mobile application for improving your soccer skills and
                  connecting with players and coaches.
                </p>
                <p>
                  The project called for combining a 3D learning experience, a regimented
                  personalized training assistant, an extensive social network, and a
                  tool for soccer coaches into one application. A high degree of
                  organization and consistency was required to bring all of these
                  features together.
                </p>
              </div>
            </div>

            <div className="content-section">
              <div className="content-panel">
                <Fade>
                  <h1>An engaging learning experience</h1>
                </Fade>
                <IphoneVideo src={"3dModel2"}/>
                <div className="description-area">
                  <Fade>
                    <p>
                      Using state of the art motion capture, the movements of professional
                      soccer players were recorded as they performed the fundamentals of the
                      game.
                    </p>
                    <p className="quote">
                      If a user can understand to a high degree how a professional player
                      performs, then they can replicate the movement.
                    </p>
                    <p>
                      I combined the motion capture data with the knowledge from the sports
                      science team to create an experience that helps the user improve their
                      kicking, passing, dribbling, and much more.
                    </p>
                  </Fade>

                  <TabbedContent tabdata={[
                      {
                        title: 'Hologram assist',
                        id: 0,
                        text: '3D hologram elements were added to highlight the importance of certain aspects of a move. This proved to be more effective and engaging rather than overlaying descriptive text on the 3D model. I wrote the code to be performant and scalable so it could be applied to all the motion capture data and run smoothly on a mobile phone. The elements were refined through user feedback until users understood what the elements were highlighting.'
                      },
                      {
                        title: '360 degree view',
                        id: 1,
                        text: 'If you are learning a soccer move from a video, you can only see what the camera shows you. With a 3D environment, the user has full control over the camera position. For example, the user can move the camera and zoom in on the kicking foot to see exactly where to strike the ball to deliver the most power.'
                      },
                      {
                        title: 'Motion control',
                        id: 2,
                        text: 'If you are watching a video of a soccer move, you will find yourself pausing and rewinding to analyze a specific moment. Adding the motion controller enables the user with complete fine grained control over viewing every moment during the move.'
                      }
                    ]}>
                  </TabbedContent>
                  
                </div>
              </div>

              <div className="content-panel alt-content-panel">
                <Fade>
                  <h1>Personalized Training</h1>
                </Fade>
                <IphoneVideo src={"trainingVideo"} />
                <div className="description-area">
                  <Fade>
                  <p>
                    Tapping the soccer ball in the bottom left corner opens up a
                    customized training program. The skill training facilitates practicing
                    and asks for the user’s personal feedback each time a technique is
                    completed. The feedback generates corrective exercises to address the
                    user’s problem areas.
                  </p>
                  <p>
                    A bright theme was applied to make it easier to read for the primary
                    use case of being outside. The list of assigned techniques is
                    displayed up front so the user’s workload can be understood at a
                    glance. Illustrations were added as a visual assist to the text in the
                    detail view.
                  </p>
                  </Fade>
                </div>
              </div>

              <div className="content-panel">
                <Fade>
                  <h1>Your training schedule at a glance</h1>
                </Fade>
                <IphoneVideo src={"s1/calVideo"} />

                <div className="description-area">
                  <Fade>
                  <p>
                    Training sessions are scheduled so that your body is resting in
                    between sessions for the optimal amount of time.
                  </p>
                  <p>
                    The calendar view displays markers on selected dates to give the user
                    an overview of their training schedule.
                  </p>
                  <p>
                    When a day is selected, everything you need to know about that day is
                    shown in the detail section.
                  </p>
                  </Fade>
                </div>
              </div>

              <div className="content-panel alt-content-panel">
                <Fade>
                  <h1>A community for soccer</h1>
                </Fade>
                <IphoneVideo src={"s1/newPost"} />

                <div className="description-area">
                  <Fade>
                  <p>
                    Tapping the newsfeed icon in the bottom right corner opens up the
                    community. Soccer-1 valued the ability for users to connect with each
                    other. Multimedia sharing between users was a priority since the
                    beginning of development.
                  </p>
                  <p>
                    Users can login and register with social media, upload a profile
                    picture, and post content to their feeds.
                  </p>
                  </Fade>
                </div>
              </div>

              <div className="content-panel">
                <Fade>
                  <h1>Customizable profiles</h1>
                </Fade>
                <IphoneVideo src={"s1/newJerseyChange"} />
                <div className="description-area">
                  <Fade>
                  <p>
                    Soccer players identify with their number and uniform. A customized
                    jersey can be added to style your profile.
                  </p>
                  <p>
                    Change your jersey and the player in the 3D model will instantly wear
                    your custom jersey.
                  </p>
                  </Fade>
                </div>
              </div>

              <div className="content-panel alt-content-panel">
                <Fade>
                  <h1>A tool for coaches</h1>
                </Fade>
                <IphoneVideo src={"s1/coachTool"} />

                <div className="description-area">
                  <Fade>
                  <p>
                    Soccer-1 decided to explore the coaching space. Groups were introduced
                    to the social network as a means for coaches to organize their players
                    and view player data.
                  </p>
                  </Fade>
                  <TabbedContent tabdata={[
                    {
                      title: 'Coach Dashboard',
                      id: 0,
                      text: 'Player data is accessible to the coach through a clear layout accessible from the group page. If a soccer team trains with the app, then the coach will receive valuable data which can be used to coach players more effectively.'
                    },
                    {
                      title: 'Location based organization',
                      id: 1,
                      text: 'Groups and coaches were deiscoverable to players by location. I implemented a simple map interface with Google Maps Javascript API to accomplish this. A group can invite a coach to join them or a coach can request to coach a group.'
                    }
                  ]}>
                  </TabbedContent>
                </div>
              </div>

              <div className="content-panel">
                <Fade>
                  <h1>Explore the app as a visitor</h1>
                </Fade>
                <IphoneVideo src={"s1/visitor"} />

                <div className="description-area">
                  <Fade>
                  <p>
                    Getting users to adopt your application is a challenge for any client
                    facing business. A good first impression needs to be made in order to
                    convert a visitor to a real user.
                  </p>
                  </Fade>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Soccer1;
