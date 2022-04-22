import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import { UploadActions } from "./reducer";
import uploadSelectors from "./selectors";

const UploadFile = () => {
  const { isLoading } = useSelector(uploadSelectors);
  const [selectFile, setSelectedFile] = useState();
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    dispatch(UploadActions.uploadReq(selectFile));
  };

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      <Button
        onClick={handleSubmission}
        variant="primary"
        type="submit"
        className="mt-3"
      >
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <span>Submit</span>
        )}
      </Button>
    </div>
  );
};

export default UploadFile;
