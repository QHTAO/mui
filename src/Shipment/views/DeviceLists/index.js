import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Typography, Menu, MenuItem } from "@mui/material";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";
import EndMessage from "../../components/EndMessage";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  fetchDevicesLists,
  shipmentDevicesSelector,
  fetchNextDevicesLists,
} from "../../slices/shipmentDevicesSlice";

function DeviceLists() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const localtion = useLocation();

  const { data, pageNum, totalPage } = useSelector(shipmentDevicesSelector);
  const [anchorElMenu, setAnchorElMenu] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  // 获取下一页的产品列表
  const fetchNextData = () => {
    dispatch(
      fetchNextDevicesLists({ shipmentOrderId: id, pageNum: pageNum + 1 })
    );
  };
  // 获取产品列表
  useEffect(() => {
    dispatch(
      fetchDevicesLists({
        shipmentOrderId: id,
        pageNum,
      })
    );
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar color="primary" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            发货- 产品列表
          </Typography>
          {/*产品列表-操作菜单 */}
          <Box>
            <IconButton
              size="large"
              color="inherit"
              edge={false}
              onClick={handleOpenMenu}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              open={Boolean(anchorElMenu)}
              id="menu-appbar"
              anchorEl={anchorElMenu}
              onClose={handleCloseMenu}
            >
              <MenuItem
                onClick={() => {
                  handleCloseMenu();
                }}
              >
                按SN添加产品
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseMenu();
                }}
              >
                按箱号添加产品
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseMenu();
                }}
              >
                清空产品列表
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* Content */}
      {!data.length ? null : (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchNextData}
          hasMore={pageNum !== totalPage}
          loader={<Loading />}
          endMessage={<EndMessage />}
        >
          <List>
            {data.map((item, index) => {
              const { sn, id, productionOrder, cartonOrder, workStation } =
                item;
              const { outerCtnIndex, palletIndex, uuid, mac } = item;
              return (
                <ListItem key={sn + index} disableGutters>
                  <ListItemButton
                    component={Link}
                    to={localtion.pathname + `/${sn}`}
                  >
                    <ListItemText primary={sn} />
                    <ChevronRightIcon color="disabled" />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </InfiniteScroll>
      )}
    </Container>
  );
}

export default DeviceLists;
