/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import jwtDecode from "jwt-decode";
import TransactionDetailContent from "../../../components/organism/TransactionDetailContent";
import { HistoryTransactionTypes, JwtPayloadTypes, UserTypes } from "../../../services/data-types";
import { getMemberTransactionsDetail } from "../../../services/member";

interface TransactionsDetailProps {
  transactionDetail: HistoryTransactionTypes;
}
export default function TransactionsDetail(props: TransactionsDetailProps) {
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
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
