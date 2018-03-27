import React, { Component } from 'react';

class ProjectsPage extends Component {
  render() {
    return (
        <div className="projectsPage page">

            <div className="card">
                <h1>
                    Projects
                </h1>

                <p>
                    Various projects outside of work that I've made.
                </p>

            </div>

            <div className="card">
                <p>
                    https://github.com/denuu/gs-challenge
                </p>
            </div>
            <div className="card">
                <p>
                    https://github.com/denuu/matrix-shift
                </p>
            </div>
            <div className="card">
                <p>
                    https://github.com/denuu/dt-ssp-simplesonic
                </p>
            </div>
            <div className="card">
                <p>
                    https://github.com/denuu/dt-page-jump
                </p>
            </div>
            <div className="card">
                <p>
                    Tomek Angela
                </p>
            </div>
            <div className="card">
                <p>
                    PocketPests
                </p>
            </div>
            <div className="card">
                <p>
                    Other app thing
                </p>
            </div>

        </div>
    );
  }
}

export default ProjectsPage;
