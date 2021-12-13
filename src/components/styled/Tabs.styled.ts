import { TabPaneProps, TabsProps } from "rc-tabs";
import { Tabs as AntTabs } from "antd";
import React from "react";
import styled from "styled-components";

const { TabPane } = AntTabs;

export const Tabs: React.FunctionComponent<TabsProps> = styled(AntTabs)`
  max-width: 1249px;
  margin: 0 auto !important;
  .ant-tabs-nav {
    margin: 0 !important;
  }
  .ant-tabs-tab {
    color: #aaa;
    font-size: 16px !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--primary-color) !important;
  }

  .ant-tabs-tab:hover {
    color: #555 !important;
  }

  .ant-tabs-ink-bar {
    background: var(--primary-color) !important;
  }
`;

export const StyledTabPane: React.FunctionComponent<TabPaneProps> = styled(
  TabPane
)`
  margin: 0 !important;
`;
