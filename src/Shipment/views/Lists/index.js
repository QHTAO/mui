import React, { useEffect } from "react";
import Container from "@mui/material/Container";

import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../../components/Header";
import EndMessage from "../../components/EndMessage";
import Loading from "../../components/Loading";
import {
  shipmentListsSelector,
  fetchShipmentLists,
  fetchNextShipmentLists,
} from "../../slices/shipmentListsSlice";

import OrderLists from "./OrderLists";

function Lists() {
  const dispatch = useDispatch();
  const { data, pageNum, totalPage } = useSelector(shipmentListsSelector);

  const fetchData = () => {
    dispatch(fetchNextShipmentLists({ pageNum: pageNum + 1 }));
  };
  useEffect(() => {
    dispatch(fetchShipmentLists({ pageNum }));
  }, []);

  return (
    <Container maxWidth={false}>
      <Header
        onClickBack={() => {
          console.log("sdadas");
        }}
        title="发货单列表"
      />
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={pageNum !== totalPage}
        loader={<Loading />}
        endMessage={<EndMessage />}
      >
        <OrderLists data={data} />
      </InfiniteScroll>
    </Container>
  );
}


export default Lists;
