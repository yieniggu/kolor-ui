import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffsetRequests } from "../../../actions/offset";
import { OffsetList } from "./OffsetList";

export const OffsetManagement = () => {
  const dispatch = useDispatch();

  const { firstRequestsFetch, gettingRequests, offsetRequests } = useSelector(
    (state) => state.offset
  );

  useEffect(() => {
    if (firstRequestsFetch && gettingRequests) {
      dispatch(getOffsetRequests());
    }
  }, []);

  return (
    <div>
      <OffsetList
        offsetRequests={offsetRequests}
        getting={gettingRequests}
        get={getOffsetRequests}
      />
    </div>
  );
};
