import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './Components/dashboard/Dashboard'
import Bookmark from './Components/Bookmark/Bookmark'
import Login from './Components/Login/Login'
import './App.css';
import Register from './Components/Register/Register'
import Particles from 'react-tsparticles';

function App() {
  return (

    <div>
      <Particles
        id="tsparticles"
        className="part"
        options={{
          backgroundMode: {
            enable: true
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
            },
            number: {
              value: 0
            },
            collisions: {
              enable: false
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: false,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: true
              }
            },
            size: {
              value: 5,
              random: {
                enable: true,
                minimumValue: 3
              },
              animation: {
                enable: false,
                speed: 10,
                minimumValue: 0.1,
                sync: true
              }
            },
            links: {
              enable: false
            },
            life: {
              duration: {
                sync: true,
                value: 0.5
              },
              count: 1
            },
            move: {
              enable: true,
              gravity: {
                enable: false
              },
              speed: 25,
              direction: "none",
              random: false,
              straight: false,
              outMode: "destroy"
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: false,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
              },
              repulse: {
                distance: 200
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          detectRetina: true,
          background: {
            color: "#000"
          },
          emitters: {
            direction: "none",
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.1
            },
            rate: {
              delay: 0.1,
              quantity: 100
            },
            size: {
              width: 0,
              height: 0
            }
          }
        }}
      />
     <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >

    <BrowserRouter>
  <Switch>
  <Route path="/login" component={Login}/>
  <Route path="/dashboard" component={Dashboard}/>
  <Route path="/bookmark" component={Bookmark}/>
  <Route path="/register" component={Register}/>
  <Route path="*" component={Login}/>
  </Switch>
  </BrowserRouter>
  </div>
  </div>

  );
}

export default App;
