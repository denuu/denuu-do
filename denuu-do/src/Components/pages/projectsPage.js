import React, { Component } from 'react';

class ProjectsPage extends Component {
  render() {
    return (
        <div className="projectsPage page">

            <div className="card">
                <h1>Projects</h1>
                <p>
                    Various projects outside of work that I've made.
                </p>
            </div>

            <div className="card">
                <h1>Collaborative Todo List</h1>
                <p>
                    A socket.io based, responsive todo list. Multiple users can log on and manipulate the list in real time.
                    https://github.com/denuu/gs-challenge
                </p>
            </div>
            <div className="card">
                <h1>Matrix shift</h1>
                <p>
                    An experiment to shift a matrix of characters by the defined amount and direction.
                    https://github.com/denuu/matrix-shift
                </p>
            </div>
            <div className="card">
                <h1>DataTables SSP SimpleSonic</h1>
                <p>
                    DataTables is a massively popular table plugin used across the web. A major flaw it has when fetching data
                    using server-side processing, was that with massive results sets, it would take a long time to load a page closer to the
                    end of the dataset. This function manipulates the popular simple() function to include a MySQL offset trick using a
                    primary key self-join, and allowing for entire queries to be passed rather than just tables.
                    https://github.com/denuu/dt-ssp-simplesonic
                </p>
            </div>
            <div className="card">
                <h1>DataTables Page Jump</h1>
                <p>
                    Datatables does not have the ability to jump to a specific page number. In cases where this is necessary, I've concocted
                    a solution.
                    https://github.com/denuu/dt-page-jump
                </p>
            </div>
            <div className="card">
                <h1>Tomek Angela Wedding</h1>
                <p>
                    A surprise wedding website for the wedding of two close friends.
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
