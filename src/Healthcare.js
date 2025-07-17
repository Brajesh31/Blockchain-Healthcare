import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { toast, Toaster } from "react-hot-toast";

const Healthcare = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [isOwner, setIsOwner] = useState(null);
  const [patientID, setPatientID] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [tests, setTests] = useState("");
  const [patientRecords, setPatientRecords] = useState([]);
  const [providerAddress, setProviderAddress] = useState("");

  const contractAddress = "0x5728c917f26ebeace202bc8fa6b9683d96cba41e";

  const contractABI = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "patientID",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "patientName",
          type: "string",
        },
        {
          internalType: "string",
          name: "diagnosis",
          type: "string",
        },
        {
          internalType: "string",
          name: "treatment",
          type: "string",
        },
        {
          internalType: "string",
          name: "tests",
          type: "string",
        },
      ],
      name: "addRecord",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "provider",
          type: "address",
        },
      ],
      name: "authorizeProvider",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getOwner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "patientID",
          type: "uint256",
        },
      ],
      name: "getPatientRecords",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "recordID",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "patientName",
              type: "string",
            },
            {
              internalType: "string",
              name: "diagnosis",
              type: "string",
            },
            {
              internalType: "string",
              name: "tests",
              type: "string",
            },
            {
              internalType: "string",
              name: "treatment",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          internalType: "struct HealthcareRecords.Record[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setProvider(provider);
        setSigner(signer);

        const accountAddress = await signer.getAddress();
        setAccount(accountAddress);

        console.log(accountAddress);

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setContract(contract);

        const ownerAddress = await contract.getOwner();

        setIsOwner(accountAddress.toLowerCase() === ownerAddress.toLowerCase());
      } catch (error) {
        console.error("Error connecting to wallet: ", error);
      }
    };
    connectWallet();
  }, []);

  const fetchPatientRecords = async () => {
    try {
      const records = await contract.getPatientRecords(patientID);
      console.log(records);
      setPatientRecords(records);
    } catch (error) {
      console.error("Error fetching patient records", error);
    }
  };

  const addRecord = async () => {
    try {
      const tx = await contract.addRecord(
        patientID,
        "Alice",
        diagnosis,
        treatment,
        tests
      );
      await tx.wait();
      fetchPatientRecords();
      toast.success("Record added successfully!");
    } catch (error) {
      console.error("Error adding records", error);
      toast.error("Failed to add record.");
    }
  };

  const authorizeProvider = async () => {
    if (isOwner) {
      try {
        const tx = await contract.authorizeProvider(providerAddress);
        await tx.wait();
        toast.success(`Provider added successfully`);
      } catch (error) {
        console.error("Error authorizing provider", error);
        toast.error("Failed to authorize provider.");
      }
    } else {
      toast.error("Only contract owner can call this function");
    }
  };

  return (
    <div className="container">
      <Toaster />
      <h1 className="title">HealthCare Application</h1>
      {account && <p className="account-info">Connected Account: {account}</p>}
      {isOwner && <p className="owner-info">You are the contract owner</p>}

      <div className="form-section">
        <h2>Fetch Patient Records</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Enter Patient ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
        />
        <button className="action-button" onClick={fetchPatientRecords}>
          Fetch Records
        </button>
      </div>

      <div className="form-section">
        <h2>Add Patient Record</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Diagnosis"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Tests"
          value={tests}
          onChange={(e) => setTests(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Treatment"
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
        />
        <button className="action-button" onClick={addRecord}>
          Add Records
        </button>
      </div>

      <div className="form-section">
        <h2>Authorize HealthCare Provider</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Provider Address"
          value={providerAddress}
          onChange={(e) => setProviderAddress(e.target.value)}
        />
        <button className="action-button" onClick={authorizeProvider}>
          Authorize Provider
        </button>
      </div>

      <div className="records-section">
        <h2>Patient Records</h2>
        {patientRecords.map((record, index) => (
          <div key={index}>
            <p>Record ID: {record.recordID.toNumber()}</p>
            <p>Diagnosis: {record.diagnosis}</p>
            <p>Tests: {record.tests}</p>
            <p>Treatment: {record.treatment}</p>
            <p>
              Timestamp:{" "}
              {new Date(record.timestamp.toNumber() * 1000).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Healthcare;
