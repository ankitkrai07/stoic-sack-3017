import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Heading,
  Text,
  Td,
  Tr,
  Tbody,
  Thead,
  Th,
  TableContainer,
  Table,
  TableCaption,
  Tfoot,
} from "@chakra-ui/react";
import { styled } from "styled-components";

export const Faq = () => {
  return (
    <ChakraProvider>
      <DIV>
        <Heading as="h1" size="xl" noOfLines={1}>
          Frequently asked questions
        </Heading>
        <br />
        <Heading as="h2" size="lg" noOfLines={1}>
          What makes TaxTim the fastest, easiest way to submit your tax return
        </Heading>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          What is TaxTim?
        </Heading>
        <Text fontSize="lg">
          TaxTim is your very own digital tax assistant. He is here to help you
          complete and submit your tax return as quickly and easily as possible
          to SARS. Think of him as an all-in-one tax practitioner in a box :)
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          How does TaxTim work?
        </Heading>
        <Text fontSize="lg">
          After registering on the TaxTim website, TaxTim will appear on screen
          and start asking you questions about your salary, expenses and other
          incomes. Much like a WhatsApp chat, the conversation is interactive
          and will explain all those complicated tax terms in simple to
          understand plain language that absolutely everyone can follow. After
          the chat TaxTim fills in your tax return forms instantly and submits
          them to SARS in just a click!
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          Do I need to know anything about tax to use TaxTim?
        </Heading>
        <Text fontSize="lg">
          Not at all. TaxTim is built for absolutely everyone and zero tax
          knowledge is required to use it. TaxTim will guide you step-by-step to
          get your tax returns done right, first time.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          Who are the people behind TaxTim? Is it just a bot?
        </Heading>
        <Text fontSize="lg">
          TaxTim is powered by a passionate team of Chartered Accountants and
          expert Tax Practitioners based in our Cape Town office. All of the
          TaxTim questions and help materials were written by us to help you
          understand the world of tax better. If at any stage you feel lost or
          uncertain, we are waiting to help you on our helpdesk, email or social
          media. Working late on your tax return? We're probably also up.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          How is TaxTim different to SARS eFiling?
        </Heading>
        <Text fontSize="lg">
          SARS has created one of the best systems in the world for submitting
          tax returns online. Think of TaxTim as a layer on top of SARS eFiling,
          designed to help you better and make life easier:
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>SARS eFiling</Th>
                  <Th>TaxTim</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Functions</Td>
                  <Td>
                    Submit tax forms
                    <br />
                    Provide assessments
                  </Td>
                  <Td>
                    Submit tax forms Explain assessments
                    <br />
                    Find all possible deductions
                    <br />
                    Optimize tax payable
                    <br />
                    Increase potential refund
                  </Td>
                </Tr>
                <Tr>
                  <Td>Language</Td>
                  <Td>Tax terminology</Td>
                  <Td>Plain language + explanations</Td>
                </Tr>
                <Tr>
                  <Td>Help provided </Td>
                  <Td>SARS website <br /> Call centre operator <br /> SARS branch</Td>
                  <Td>
                    Friendly tax practitioners and CA's via online helpdesk
                    <br />
                    In-context help and explanations 7,000+ tax articles and
                    <br />
                    calculators
                    <br />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Checking your submission </Td>
                  <Td>Basic compliance checks </Td>
                  <Td>
                    Basic compliance checks Potential tax deduction checks
                    <br />
                    Multiple system checks to detect errors
                  </Td>
                </Tr>
                <Tr>
                  <Td>Audit requests</Td>
                  <Td>Sent to you</Td>
                  <Td>Sent to you Explained to you</Td>
                </Tr>
                <Tr>
                  <Td>Additional tools</Td>
                  <Td>None</Td>
                  <Td>Yes many! See below</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          Aren't my taxes too complicated for TaxTim to handle?
        </Heading>
        <Text fontSize="lg">
          No individual taxpayer or tax situation is too complicated for us to
          handle. The only section we do not complete for people is the Farming
          section, which we hope doesn't affect too many of you. So from foreign
          dividends to local business, from independent contractors to capital
          gains - you name it - TaxTim is perfectly suited to take care of any
          tax situation and complete and submit your tax return to SARS, whether
          it's simple or complicated.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          Is it easy to switch from eFiling to TaxTim?
        </Heading>
        <Text fontSize="lg">
          Yes it is. Connecting TaxTim to your eFiling profile takes less than a
          minute (on average) and once connected you can import your saved IRP5s
          from eFiling (saves you time), submit your completed tax returns to
          eFiling in a click, get your ITA34 assessments and letters (we'll
          explain what these mean when we send them to you) and upload
          supporting documents. All your TaxTim submissions are copied onto
          eFiling automatically so you can go back to eFiling should you ever
          wish to.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          How much does it cost?
        </Heading>
        <Text fontSize="lg">
          For our latest pricing, please see our pricing page. Please note the
          price quoted is per tax return and is a once-off price, NOT a
          subscription or monthly cost. Therefore, in most cases where you only
          need to file a tax return once in a year, then the cost will be one
          single payment. If you are behind in your tax return filings and you
          need the prior year and current year filed, you will need to pay the
          fee twice (two tax returns).
          <br />
          We have partnerships with some of South Africa's biggest brands, so
          look out for discounts that may apply to you - some offer TaxTim for
          free! First time users currently qualify for 15% off TaxTim if they
          pay upfront.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          Do I need to have all my documents prepared before I start with
          TaxTim?
        </Heading>
        <Text fontSize="lg">
          No you don't. TaxTim will ask you for specific information from your
          documents as you follow the on screen process. TaxTim will tell you
          what documents you need and where to look on them for the numbers you
          need. If you don't have the document required TaxTim will help you to
          get it from your medical scheme, investment house, etc. You can start
          and stop, leave and come back at any time - your work is saved
          automatically as you go.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          Is my tax return checked before it goes to SARS?
        </Heading>
        <Text fontSize="lg">
          Yes, our system checks your tax return before it is submitted to SARS.
          Remember, you are responsible for filling in the correct amounts (only
          you know these!) but we check to ensure it makes sense and there are
          no obvious duplicates or omissions and you have answered all the
          relevant questions. We will query any unusual amounts with you to
          ensure they are correct. Let us pick up any errors, before your tax
          return gets sent to SARS.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          What if I need help along the way?
        </Heading>
        <Text fontSize="lg">
          We have an online help desk which is manned by expert tax
          practitioners who are trained to assist you through the process and
          also answer any technical questions you may have. We also have an
          instant chat for those burning questions that just can’t wait. We are
          very patient, you can ask us anything at all!
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          Does TaxTim help me after submitting my return if I get audited?
        </Heading>
        <Text fontSize="lg">
          Yes, we certainly do! We guide you through the document submission
          process by clarifying which supporting documents you need to submit
          and then sending those documents to SARS for you (only if we have
          connected to your SARS eFiling profile). Depending on load, we also
          help with the dispute resolution / objection process if requested
          (although there will be a fee charged).
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          I'm afraid... What if I do something horribly wrong?
        </Heading>
        <Text fontSize="lg">
          You really don't need to worry :) Our team of tax experts will catch
          most mistakes where possible, although we can't tell if you made a
          small mistake like a typo. Our system is designed to be extremely
          thorough, so we will likely ask you more questions than required at
          times, but at least you know you have entered everything and done
          things properly. If you are worried about how to claim or if you can
          claim, you can reach us on live chat or our helpdesk to ask. If you
          notice a problem after you have submitted to SARS, it's easy to make a
          correction on TaxTim and submit a corrected tax return. SARS will not
          get upset with you for making honest mistakes and corrections are
          quite routine.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          What do I get for my money, besides a completed tax return?
        </Heading>
        <Text fontSize="lg">
          Tax season deadline reminders so you never forget to submit on time.
          An online document storage facility to keep important tax certificates
          safe. Multiple system checks before submission to SARS. Online support
          from expert tax practitioners throughout the process. A "Tax Health
          Score" report containing personalised recommendations on how to become
          more tax efficient. Tax Expense Tracker app to track expenses
          throughout the year and make end-of-year accounting easy. Vehicle
          logbook app to track your work and private car trips. Assistance with
          supporting documents submission, if audited by SARS. Assistance with
          dispute resolution / objection process, if applicable. (Note there may
          be an additional fee charged depending on the complexity of the
          dispute). Last but not least, peace of mind when doing your taxes.
        </Text>
        <br />
        <Heading as="h2" size="md" noOfLines={1}>
          Who is MD SEVITZ?
        </Heading>
        <Text fontSize="lg">
          Marc is one of the original founders of TaxTim. He is a Chartered
          Accountant, trained in local and international tax. When you connect
          your eFiling profile to TaxTim your transfer request will come from MD
          SEVITZ because he is the main tax practitioner on record for TaxTim.
        </Text>
        <br />
      </DIV>
    </ChakraProvider>
  );
};
const DIV = styled.div`

  h1 {
    color: #3f3e3e;
  }
  h2 {
    color: #494848;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 50px;
  td {
    border: 1px solid black;
  }
  th {
    border: 1px solid black;
  }
  table {
    border: 1px solid black;
    font-size: 16px;
    margin-top: 25px;
  }
`;
