/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import jwtDecode from "jwt-decode";
import TransactionDetailContent from "../../../components/organism/TransactionDetailContent";
import { JwtPayloadTypes, UserTypes } from "../../../services/data-types";
import { getMemberTransactionsDetail } from "../../../services/member";

export default function TransactionsDetail(transactionDetail) {
  console.log("detail: ", transactionDetail);

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  },
  params: {
    idTrx: string
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JwtPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getMemberTransactionsDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
