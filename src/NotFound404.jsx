import React, { Component } from "react";

class NotFound404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: true, // Initial visibility of the message
      redirect: false, // State for redirection
    };
  }

  componentDidMount() {
    // Set a timeout to hide the message after 3 seconds
    setTimeout(() => {
      this.setState({ showMessage: false });
      // Redirect to the Movies page after hiding the message
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 3000);
    }, 3000);
  }

  render() {
    const { showMessage } = this.state; // Destructure state
    // If redirect state is true, redirect to the Movies page

    return (
      <>
        <div className="container">
          <img src="/image.png" className="img-fluid w-50" alt="" />

          {/* Message "Redirect to Movies page" */}
          {!showMessage && (
            <p className="text-center">
              <strong>Redirect to Movies page</strong>
            </p>
          )}
        </div>
      </>
    );
  }
}

export default NotFound404;
