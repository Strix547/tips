import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { Header, Footer } from 'layout'

import * as S from './TermsOfUse.styled'

export const TermsOfUsePage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('terms-of-use')}</title>
      </Head>

      <Header />

      <S.Main>
        <S.Text>Terms of use</S.Text>
        <S.Text>Publication date: November 11, 2021</S.Text>
        <S.Text>I. General</S.Text>
        <S.Text>
          I.1. SARL “BANIONIS NAZAR” (SIREN number: 794 253 203 hereinafter referred to as the
          Operator of tips service called FlyTips) has developed and approved this User Agreement.
        </S.Text>
        <S.Text>
          I.2. The User is obliged to familiarize himself with this User Agreement before using the
          FlyTips Service and accept its terms in full. Disagreement of the User with the terms of
          the User Agreement entails the impossibility of using the Service.
        </S.Text>
        <S.Text>
          I.3. This User Agreement is a public offer. The Operator begins to provide services to the
          User from the moment of acceptance of the User Agreement and the Personal Data Processing
          Policy posted at: www.FlyTips.com
        </S.Text>
        <S.Text>
          I.4. Acceptance of this User Agreement and the Personal Data Processing Policy is carried
          out:
        </S.Text>
        <S.Text>
          A waiter by filling out the registration form or sending an application on the website and
          / or in the Service application. When performing registration actions, the Waiter puts a
          tick in the box "I agree with the terms of the User Agreement and the Personal Data
          Processing Policy". Disagreement of the Waiter with the terms of the User Agreement and
          the Policy entails the impossibility of using the FlyTips Service provided by SARL
          “BANIONIS NAZAR” by the Waiter and refusal to register.
        </S.Text>
        <S.Text>
          Restaurant administrator in two stages: Consent to the User Agreement posted at
          waiter.netmonet.co - by sending the Operator to the email address: business@flytips.com an
          application for registration in the Service indicating the full name, mobile phone number,
          email address of the Administrator and the name of the restaurant with a note in the text
          of the letter "I accept the terms of the User Agreement and the Personal Data Processing
          Policy posted on the Service website." Consent to this User Agreement - by filling out the
          registration form on the website and / or in the Service application after receiving a
          login and password to use the Service. When completing the registration actions, the
          Restaurant Administrator puts a tick in the box “I agree with the terms of the User
          Agreement and the Personal Data Processing Policy”. Disagreement of the Restaurant
          Administrator with the terms of the User Agreement and the Policy entails the
          impossibility of using the Service and refusal to register.
        </S.Text>
        <S.Text>
          I.5. The User is also obliged to familiarize himself with the User Agreements of the
          Payment Systems before using the Service and accept their terms of use in full.
        </S.Text>
        <S.Text>
          An agreement on the transfer of electronic money without opening bank accounts using ESP
          is considered concluded and becomes effective from the moment an individual performs
          actions, provided by this User Agreement and meaning the unconditional acceptance by an
          individual of all the terms of this User Agreement and the public offer of the Payment
          System without any exceptions or restrictions on the terms of joining. Acceptance of this
          User Agreement means acceptance of the terms of the User Agreement of the Payment System.
        </S.Text>
        <S.Text>II. Terms and Definitions</S.Text>
        <S.Text>
          II.1. FlyTips service is available when using the site at: https://FlyTips.com or a mobile
          application, the main function of which is to provide the possibility of voluntary and
          gratuitous transfer of funds in non-cash form (tips) from the Guest to the Waiter,
          registered in the Service by transferring funds to his personal account.
        </S.Text>
        <S.Text>
          II.2. User is any visitor to the Service. The Service divides three categories of Users,
          different in terms of the scope of the granted rights and assigned duties - "Givers",
          "Receivers" , “Business” , “Agents”.
        </S.Text>
        <S.Text>
          Guest or Giver is an unregistered User of the Service who has the right to carry out
          voluntary and gratuitous money transfers using the functionality of the Service, as well
          as to leave feedback on the work of the Service Waiters.
        </S.Text>
        <S.Text>
          Waiter is a registered User of the Service who can receive money transfers (tips) from the
          Guests to the personal account of the Waiter.
        </S.Text>
        <S.Text>
          Restaurant Administrator or “business” category in our FlyTips Service is a registered
          User of the Service who has the ability to provide access to the Service to the Waiters,
          and who controls the received money transfers (tips) and reviews about the work of the
          Waiters.
        </S.Text>
        <S.Text>
          II.3. Payment system - a partner (s) of the Service, providing (s) the possibility of
          making a non-cash transfer of funds (tips) from Guests (Givers) to Waiters (Receivers)
        </S.Text>
        <S.Text>
          II.4. Personal data - any information about the User obtained in the process of using the
          Service.
        </S.Text>
        <S.Text>
          II.5. Cross-border transfer of personal data - transfer of the User's personal data to
          databases located on the territory of a foreign state.
        </S.Text>
        <S.Text>
          II.6. Confidential information - information transmitted by the User to the Operator in
          accordance with this Agreement, which includes but is not limited to the following:
          commercial, contractual and financial information, as well as all documents and / or other
          information prepared in writing or in another form by the User, which reflect and / or
          include such information.
        </S.Text>
        <S.Text>
          Information subject to protection and non-disclosure in accordance with this Agreement
          does not include information posted by the User in the public domain on the resources of
          the Service and on other sites and services, as well as other information that cannot be
          confidential information in accordance with the current International legislation .
        </S.Text>
        <S.Text>II. Using the "FlyTips" service provided by SARL “BANIONIS NAZAR”</S.Text>
        <S.Text>
          III.1. The Operator acts as an intermediary in the implementation of money transfers from
          the Guest to the Service Waiter using the Payment System. The operator acts on its own
          behalf and at the expense of the recipients of the money transfers.
        </S.Text>
        <S.Text>III.2. The service provides an opportunity:</S.Text>
        <S.Text>
          Voluntary gratuitous transfer of funds from the Guest to the Waiter exclusively in a
          non-cash form through the use of the Payment System; Guest leaving feedback on the work of
          the Waiters.
        </S.Text>
        <S.Text>
          III.3. A voluntary gratuitous transfer of funds can be carried out in one of the following
          ways:
        </S.Text>
        <S.Text>
          Payment by the Guest's bank card using the Service and the Payment System; payment by
          credit card of the Guest through mobile payment systems (Apple Pay, Google Pay and / or
          Samsung Pay).
        </S.Text>
        <S.Text>
          III.4. In order to receive funds from the Guest, the Waiter must create an account in the
          FlyTips Service.
        </S.Text>
        <S.Text>
          III.5. The creation of a Waiter account and a personal account in the Payment system is
          carried out in two stages:
        </S.Text>
        <S.Text>
          The restaurant administrator (“business”) enters the contact and personal data of the
          Waiters in his account in order to send them a registration link by the Service. The
          restaurant administrator guarantees the receipt of consent from the Waiter for the
          transfer of his personal data to the Operator in order to send a registration link to his
          mobile phone number; The waiter, following the registration link, confirms the correctness
          of personal data or corrects the displayed personal data, adds additional personal data
          (including a photo), confirms agreement with the terms of this User Agreement and the
          Personal Data Processing Policy. The waiter's code (login) is assigned by the Restaurant
          Administrator, the personal account in the Payment system for using the Service is
          automatically generated by the Service, the password is generated by the Waiter
          independently.
        </S.Text>
        <S.Text>
          III.6. The creation of an account for the Restaurant Administrator is made on the basis of
          an application sent to the Operator to the e-mail address: business@FlyTips.com. The
          Operator, after receiving the application and personal data of the Restaurant
          Administrator, generates a login and password for using the Service. The restaurant
          administrator at the first login to the account expresses his consent to the terms of this
          User Agreement and the Personal Data Processing Policy.
        </S.Text>
        <S.Text>
          III.7. By joining this User Agreement and providing the Operator with information, the
          User is responsible for the accuracy of the data provided.
        </S.Text>
        <S.Text>
          III.8. The user guarantees that all information provided by him, including photographs of
          the Waiters, does not violate the intellectual rights of third parties.
        </S.Text>
        <S.Text>
          III.9. The Operator is not responsible for the purpose and purpose of transferring funds
          from the Guest (Giver) to the Waiter (Receiver).
        </S.Text>
        <S.Text>
          III.10. Obligations and responsibility for the calculation and payment of any taxes and
          fees stipulated by the legislation arising in connection with the use of the Service are
          assigned to the User (Guest or Waiter).
        </S.Text>
        <S.Text>
          III.11. The Operator (FlyTips service) reserves the right at any time to establish and /
          or change the individual limit of each Guest for the transfer amount per day / month / for
          another period, as well as check the purpose and purpose of the transfer in order to
          protect the rights and legitimate interests of the Guest and third parties.
        </S.Text>
        <S.Text>
          III.12. The Operator (FlyTips) charges a commission on money transfers from the Guest to
          the Waiter. The waiter agrees that the Operator's remuneration for using the Service is
          the commission charged by the Payment System. The Service, through the use of the Payment
          System, transfers funds to the Waiter at his request, minus the Operator's commission.
        </S.Text>
        <S.Text>
          III.11. The Operator reserves the right at any time to establish and / or change the
          individual limit of each Guest for the transfer amount per day / month / for another
          period, as well as check the purpose and purpose of the transfer in order to protect the
          rights and legitimate interests of the Guest and third parties.
        </S.Text>
        <S.Text>
          III.12. The Operator charges a commission on money transfers from the Guest to the Waiter.
          The waiter agrees that the Operator's remuneration for using the Service is the commission
          charged by the Payment System. The Service, through the use of the Payment System,
          transfers funds to the Waiter at his request, minus the Operator's commission.
        </S.Text>
        <S.Text>IV. Rights and obligations of the User and the Operator</S.Text>
        <S.Text>
          IV.1. The user has the right to: use the functionality of the FlyTips Service provided by
          SARL “BANIONIS NAZAR” in accordance with the assigned category of the User; transfer
          Confidential information to the Operator to take actions necessary to use the SARL
          “BANIONIS NAZAR” Service; refuse to receive informational messages by sending a
          notification to the Operator to the email address support@flytips.com; restrict access to
          your personal data in whole, by refusing to use the Service, or in part, provided that the
          use of the Service will be possible without access to the relevant data, by sending a
          notification to the Operator at the e-mail address: support@flytips.com contact the
          support of the Service with questions, claims and suggestions related to the functioning
          of the Service by sending an email to the email address: support@flytips.com. The deadline
          for sending claims is 3 (three) business days from the date of the event in connection
          with which the claim is sent.Waiters and Restaurant Administrators have the right to gain
          access to information about the feedback left about the work of the Waiters, as well as
          the date and amount of money transfers received to the personal account of the Waiter;
        </S.Text>
        <S.Text>
          IV.2. The user undertakes: To provide true, current, accurate and complete information
          when using the FlyTips Service provided by SARL “BANIONIS NAZAR”.
        </S.Text>
        <S.Text>
          At the same time, the User agrees that the Operator is not obliged to check the accuracy
          of the information provided by the User; update the Personal data provided during
          registration, in case of their change; not to act on behalf of another really existing or
          existing person, not to indicate personal information of third parties, not to use
          information of third parties in any other way that does not meet the requirements of the
          International legislation. The User bears responsibility for these actions, including
          those that caused losses to the Service; not to transfer your account and / or the login
          and password of your account to third parties, be responsible for the safety of this
          information.
        </S.Text>
        <S.Text>
          IV.3. The operator has the right to: change the terms of the User Agreement and the
          Personal Data Processing Policy; at any time to refuse the User to use the Service.
          Refusal to use the Service can be expressed by refusing to transfer funds, refusing to
          register on the resources of the Service, or deleting the User's account. The Operator is
          not obliged to disclose to the User the reasons for refusing to use the Service; attract
          third parties to achieve the goals of using the Service, subject to the confidentiality
          conditions and other conditions stipulated by this User Agreement; carry out a
          cross-border transfer of the User's personal data for their further processing using
          databases located in Germany.
        </S.Text>
        <S.Text>IV.4. The operator undertakes:</S.Text>
        <S.Text>
          To provide services to the User in accordance with this User Agreement; to maintain the
          functionality of the Service, except in cases where it is impossible for reasons beyond
          the control of the Operator; to ensure the safety and non-disclosure of the Confidential
          Information provided by the User in accordance with this Agreement. The Operator
          undertakes not to disclose, provide, distribute, discuss or reproduce Confidential
          Information to any person without the express consent of the User, except as otherwise
          provided by the legislation of the Russian Federation or the Agreement.
        </S.Text>
        <S.Text>V. Final provisions</S.Text>
        <S.Text>
          V.1. This User Agreement comes into force from the moment of acceptance of the User
          Agreement and the Personal Data Processing Policy in the manner prescribed in clause 1.4
          of the User Agreement.
        </S.Text>
        <S.Text>
          V.2. Acceptance of this User Agreement expresses the User's full agreement with the terms
          of the User Agreement.
        </S.Text>
        <S.Text>
          V.3. The Operator is not responsible for the services provided by third parties, including
          the partners of the FlyTips Service.
        </S.Text>
        <S.Text>
          V.4. The operator is not responsible for delays in money transfers due to incorrectly
          specified recipient details or problems that have arisen on the side of the recipient's
          bank.
        </S.Text>
        <S.Text>
          V.5. The Operator (SARL “BANIONIS NAZAR”) has the right to make amendments and changes to
          this User Agreement by posting a new version of the User Agreement on the website and in
          the Service application. The user undertakes to independently periodically check this User
          Agreement for changes (the document indicates the date of its publication). Changes to the
          User Agreement made by the Operator come into force after 3 (three) business days from the
          date of publication of the new edition of the User Agreement.
        </S.Text>
        <S.Text>
          The User has the right to refuse to accept changes and additions to this User Agreement,
          which means the User's refusal to use the Service.
        </S.Text>
        <S.Text>
          V.6. This User Agreement is available in the account of the Waiter and the Administrator
          of the restaurant.
        </S.Text>
        <S.Text>
          V.7. In the event of any disputes or disagreements, the parties establish a mandatory
          pre-trial procedure for filing a claim. The term for consideration of the claim is 30
          calendar days from the date of receipt by the Operator. If disputes or disagreements will
          not be resolved by the parties, they are subject to consideration in an arbitration court
          or a court of general jurisdiction at the location of the Operator.
        </S.Text>
        <S.Text>Terms of use</S.Text>
        <S.Text>© 2021 SARL “BANIONIS NAZAR” , FlyTips Service. All rights reserved.</S.Text>
      </S.Main>

      <Footer />
    </>
  )
}
