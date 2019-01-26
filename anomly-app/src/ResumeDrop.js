import React from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";

class ResumeDrop extends React.Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classNames("dropzone", {
                "dropzone--isActive": isDragActive
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <p>Click or Drag and drop your resume here</p>
              )}
            </div>
          );
        }}
      </Dropzone>
    );
  }
}

export default ResumeDrop;
