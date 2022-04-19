import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NFTManagement } from "./NFT/NFTManagement";

import { NFTMintingPanel } from "./NFT/NFTMintingPanel";
import { OffsetManagement } from "./offset/OffsetManagement";

export const AdminScreen = () => {
  return (
    <div className="container mt-4">
      <Tabs>
        <TabList>
          <Tab>Minting</Tab>
          <Tab>Land Management</Tab>
          <Tab>Offset Requests</Tab>
        </TabList>
        <TabPanel>
          <NFTMintingPanel />
        </TabPanel>
        <TabPanel>
          <NFTManagement />
        </TabPanel>
        <TabPanel>
          <OffsetManagement />
        </TabPanel>
      </Tabs>
    </div>
  );
};
