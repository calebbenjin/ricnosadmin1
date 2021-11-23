import Container from "src/components/atoms/Container";
import Table from "src/components/atoms/Table";
import Heading from "../../../components/atoms/Heading";
import Layout from "../../../components/organisms/Layout";

export default function FinancePage() {
  return (
    <Layout >
      <Container>
        <Heading title="Finance Page" />
        <Table />
      </Container>
    </Layout>
  )
}
