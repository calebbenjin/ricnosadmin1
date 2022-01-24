import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import FooterComp from '@/components/atoms/Footer';
import { LogoOne } from '@/components/atoms/Logo';
import { useForm } from 'react-hook-form';
import { BsEye } from 'react-icons/bs';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import {
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import FormInput from '@/components/atoms/FormInput';

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClick = () => setShow(!show);

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    router.push('/admin/dashboard');
  };

  return (
    <Layout>
      <Container>
        <Heading title={`Hello ${user.name}`}></Heading>

        <Section>
          <Grid>
            <NotificationCard
              title="REQUEST FOR QUOTATION"
              number={user.quote_requests}
              greaterThen="1.2"
              icon={<HiOutlinePencilAlt className="icon" />}
            />
            <NotificationCard
              title="SHIPMENTS"
              number={user.active_orders.length}
              greaterThen="1.2"
              icon={<IoCalendarOutline className="icon" />}
            />
            <NotificationCard
              title="INVOICE TO PAY"
              number="32"
              greaterThen="1.2"
              icon={<CgNotes className="icon" />}
            />
          </Grid>
        </Section>

        <Section>
          <Grid2>
            <Payout
              notify="8"
              value="60"
              riderAmount={user.payouts.riders}
              agentAmount={user.payouts.agent}
            />
            <Deliveries />
          </Grid2>
        </Section>

        <Section>
          <ActiveShipments>
            {user.active_orders.length > 0 ? (
              user.active_orders.map((order) => (
                <ShipmentCard key={order.id} data={order} />
              ))
            ) : (
              <p>No active orders</p>
            )}
          </ActiveShipments>
        </Section>

        <Section>
          <Grid2>
            <ActivityLog />
            <SummaryLog />
          </Grid2>
        </Section>
      </Container>
    </Layout>
  );
}

const Box = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  .layoutContainer {
    display: flex;
    justify-content: space-between;
  }

  .btnContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imgBg {
    height: 100vh;
    width: 50%;
  }

  .term {
    color: #eee;
    margin-top: 1rem;
  }

  .forgotLink {
    color: #eee;
  }

  .loginTitle {
    margin-bottom: 2rem;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  .logo {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  .formContainer {
    height: 100vh;
    width: 50%;
    background: ${(props) => props.theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .loginTitle {
      color: #fff;
      text-align: center;
    }

    .modal {
      color: #fff;
    }

    .form {
      width: 60%;

      button {
        text-align: center;
        margin-top: 1.5rem;
      }

      .termsLink {
        margin-top: 1rem;
        color: #eee;
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
