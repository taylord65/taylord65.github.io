import React from "react";
import SidePanel from './../components/small/sidePanel'
import ScrollIndicator from './../components/small/scrollIndicator'
import IphoneVideo from './../components/small/iphoneVideo'
import TabbedContent from './../components/small/tabbedContent'
import Footer from './../components/Footer'
import cover from './../images/s1_cover_faded.png'

class Soccer1 extends React.Component {
  render() {
    const coverStyle = {
      backgroundImage: `url(${cover})`
    };

    return (
      <div className="portfolio-feature">

        <SidePanel routerProps={this.props} />

        <div className="cover" id="s1_background" style={coverStyle}>
          <div className="cover-headline">
            <h1>Soccer-1</h1>
            <h2>Design and development</h2>
            <h3>2016 - 2017</h3>
          </div>
          <ScrollIndicator />
        </div>

        <div className="scrollUpBack">
          <div className="scrollUpSection">
            <div className="overview-banner">
              <div className="banner-container">
                <p>
                  Soccer-1 is a mobile application for improving your soccer skills and
                  connecting with other players and coaches.
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
                <h1>An engaging learning experience</h1>
                <IphoneVideo src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/3dModel2.mp4"}/>
                <div className="description-area">
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

                  <TabbedContent tabdata={[
                      {
                        title: '360 degree view',
                        id: 0,
                        text: 'If you are learning a soccer move from a video, you can only see what the camera shows you. With a 3D environment, the user has full control over the camera position. For example, the user can move the camera and zoom in on the kicking foot to see exactly where to strike the ball to deliver the most power.'
                      },
                      {
                        title: 'Motion control',
                        id: 1,
                        text: 'If you are watching a video of a soccer move, you will find yourself pausing and rewinding to analyze a specific moment. Adding the motion controller enables the user with complete fine grained control over viewing every moment during the move.'
                      },
                      {
                        title: 'Hologram assist',
                        id: 2,
                        text: '3D hologram elements were added to highlight the importance of certain aspects of a move. This proved to be more effective and engaging rather than overlaying descriptive text on the 3D model. I wrote the code to be performant and scalable so it could be applied to all the motion capture data and run smoothly on a mobile phone. The elements were refined through user feedback until users understood what the elements were highlighting.'
                      }
                    ]}>
                  </TabbedContent>
                </div>
              </div>

              <div className="content-panel alt-content-panel">
                <h1>Personalized Training</h1>
                <IphoneVideo src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/trainingVideo.mp4"} />
                <div className="description-area">
                  <p>
                    Tapping the soccer ball in the bottom left corner opens up a
                    customized training program. The skill training facilitates practicing
                    and asks for the user’s personal feedback each time a technique is
                    completed. The feedback generates corrective exercises to address the
          user’s problem areas.{" "}
                  </p>
                  <p>
                    A bright theme was applied to make it easier to read for the primary
                    use case of being outside. The list of assigned techniques is
                    displayed up front so the user’s workload can be understood at a
                    glance. Illustrations were added as a visual assist to the text in the
                    detail view.
         </p>
                </div>
              </div>

              <div className="content-panel">
                <h1>Your training schedule at a glance</h1>
                <IphoneVideo src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/s1/calVideo.mp4"} />

                <div className="description-area">
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
                </div>
              </div>

              <div className="content-panel alt-content-panel">
                <h1>A community for soccer</h1>
                <IphoneVideo src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/s1/newPost.mp4"} />

                <div className="description-area">
                  <p>
                    Tapping the newsfeed icon in the bottom right corner opens up the
                    community. Soccer-1 values the ability for users to connect with each
                    other. Multimedia sharing between users was a priority since the
                    beginning of development.
         </p>
                  <p>
                    Users can login and register with social media, upload a profile
                    picture, and post content to their feeds.
         </p>
                </div>
              </div>

              <div className="content-panel">
                <h1>Customizable profiles</h1>
                <IphoneVideo src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/s1/newJerseyChange.mp4"} />
                <div className="description-area">
                  <p>
                    Soccer players identify with their number and uniform. A customized
                    jersey can be added to style your profile. This proved to be a feature
                    users identified with. This also helped differentiate our social
                    network.
         </p>
                  <p>
                    Change your jersey and the player in the 3D model will instantly wear
                    your custom jersey.
         </p>
                </div>
              </div>

              <div className="content-panel alt-content-panel">
                <h1>A tool for coaches</h1>
                <IphoneVideo src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/s1/coachTool.mp4"} />

                <div className="description-area">
                  <p>
                    Soccer-1 decided to explore the coaching space. Groups were introduced
                    to the social network as a means for coaches to organize their players
                    and view player data.
                  </p>
                  <TabbedContent tabdata={[
                    {
                      title: 'Coach Dashboard',
                      id: 0,
                      text: 'Player data is accessible to the coach through a clear layout accessible from the group page. If a soccer team trains with the app, then the coach will receive valuable data which can be used to coach players more effectively.'
                    },
                    {
                      title: 'Location based organization',
                      id: 1,
                      text: 'It was decided that groups and coaches would be discoverable to players by location. I implemented a simple map interface with Google Maps Javascript API to accomplish this. A group can invite a coach to join them or a coach can request to coach a group.'
                    }
                  ]}>
                  </TabbedContent>
                </div>
              </div>

              <div className="content-panel">
                <h1>Explore the app as a visitor</h1>
                <IphoneVideo src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/s1/visitor.mp4"} />

                <div className="description-area">
                  <p>
                    Getting users to adopt your application is a challenge for any client
                    facing business. A good first impression needs to be made in order to
                    convert a visitor to a real user.
         </p>
                  <p>
                    Technical and business limitations restricted us from doing away with
                    a login system all together. As a designer, I had to do the best I
                    could to open up the application to visitors.
         </p>
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
