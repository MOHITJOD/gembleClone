import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// table function


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Brokrege() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className="fs-3" label="Equity" {...a11yProps(0)} />
            <Tab className="fs-3" label="Currency" {...a11yProps(1)} />
            <Tab label="Commodity" className="fs-3" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Equity delivery</TableCell>
                  <TableCell>Equity intraday &nbsp;</TableCell>
                  <TableCell>F&O - Futures &nbsp;</TableCell>
                  <TableCell>F&O - Options &nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Brokerage
                  </TableCell>
                  <TableCell component="th" scope="row">
                    Zero Brokerage
                  </TableCell>
                  <TableCell component="th" scope="row">
                    0.03% or Rs. 20/executed order whichever is lower
                  </TableCell>
                  <TableCell component="th" scope="row">
                    0.03% or Rs. 20/executed order whichever is lower
                  </TableCell>
                  <TableCell component="th" scope="row">
                    Flat Rs. 20 per executed order
                  </TableCell>
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    STT/CTT
                  </TableCell>
                  <TableCell component="th" scope="row">
                    0.1% on buy & sell
                  </TableCell>
                  <TableCell component="th" scope="row">
                    0.025% on the sell side
                  </TableCell>
                  <TableCell component="th" scope="row">
                    0.02% on the sell side
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <ul>
                      <li>
                        0.125% of the intrinsic value on options that are bought
                        and exercised
                      </li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Transaction charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                    NSE: 0.00297% BSE: 0.00375%
                  </TableCell>
                  <TableCell component="th" scope="row">
                    NSE: 0.00297% BSE: 0.00375%
                  </TableCell>
                  <TableCell component="th" scope="row">
                    NSE: 0.00173% BSE: 0
                  </TableCell>
                  <TableCell component="th" scope="row">
                    NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)
                  </TableCell>
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    GST
                  </TableCell>
                  <TableCell component="th" scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </TableCell>
                  <TableCell component="th" scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </TableCell>
                  <TableCell component="th" scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </TableCell>
                  <TableCell component="th" scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </TableCell>
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    SEBI charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                    ₹10 / crore{" "}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    ₹10 / crore{" "}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    ₹10 / crore{" "}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    ₹10 / crore{" "}
                  </TableCell>
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Stamp charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                    0.015% or ₹1500 / crore on buy side  0.003% 
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.003% or ₹300 / crore
                  on buy side
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.002% or ₹200 / crore on buy side
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.003%  or
                  ₹300 / crore on buy side{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Currency futures</TableCell>
                  <TableCell>Currency options&nbsp;</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Brokerage
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.03% or ₹ 20/executed order whichever is lower	
                  </TableCell>
                  <TableCell component="th" scope="row">
                  ₹ 20/executed order
                  </TableCell>
                  </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    STT/CTT
                  </TableCell>
                  <TableCell component="th" scope="row">
                   No STT
                  </TableCell>
                  <TableCell component="th" scope="row">
                    No STT
                  </TableCell>
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Transaction charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                  NSE: 0.00035%
BSE: 0.00045%	
                  </TableCell>
                  <TableCell component="th" scope="row">
                  NSE: 0.0311%
                  BSE: 0.001%
                  </TableCell>
                 
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    GST
                  </TableCell>
                  <TableCell component="th" scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </TableCell>
                  <TableCell component="th" scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </TableCell>
                 
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    SEBI charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                    ₹10 / crore{" "}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    ₹10 / crore{" "}
                  </TableCell>
                  
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Stamp charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.0001% or ₹10 / crore on buy side	
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.0001% or ₹10 / crore on buy side 
                  </TableCell>
                  
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>	Commodity futures</TableCell>
                  <TableCell>	Commodity options &nbsp;</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Brokerage
                  </TableCell>
                  <TableCell component="th" scope="row">
                    Zero Brokerage
                  </TableCell>
                  <TableCell component="th" scope="row">
                    0.03% or Rs. 20/executed order whichever is lower
                  </TableCell>
                 
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    STT/CTT
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.01% on sell side (Non-Agri)                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.05% on sell side
                  </TableCell>
                  
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Transaction charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                    NSE: 0.00297% BSE: 0.00375%
                  </TableCell>
                  <TableCell component="th" scope="row">
                    NSE: 0.00297% BSE: 0.00375%
                  </TableCell>
                 
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    GST
                  </TableCell>
                  <TableCell component="th" scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </TableCell>
                  <TableCell component="th" scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </TableCell>
                  
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    SEBI charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                  Agri:
₹1 / crore
Non-agri:
₹10 / crore                  </TableCell>
                  <TableCell component="th" scope="row">
                    ₹10 / crore{" "}
                  </TableCell>
                  
                </TableRow>
                <TableRow
                  // key="Brokerage"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Stamp charges
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.002% or ₹200 / crore on buy side	
                  </TableCell>
                  <TableCell component="th" scope="row">
                  0.003% or ₹300 / crore on buy side
                  </TableCell>
                  
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default Brokrege;
