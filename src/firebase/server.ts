import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import Account from "./blog.json";

/* const serviceAccount = {
  type: "service_account",
  project_id: "blog-3a194",
  private_key_id: "5eca3fb601631915ca27871ecc5398067713ed4f",
  private_key: "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCiBgjIb10tYr0h\n8cZbs20QP4Dp2lGVHDgKG9zawS9YxPGrNpQmYxm5MIGUr8NI9DchcQJVG3Qv1Wy/\nkDm8//iWdmpp2xKXyhwnn/ApAahhyWwWRaTNAbKTSMTvtzYJXsLqrGTtd0Bs+3bA\nkidhA+yf9d2QCNZD2xmAvK1xNWZqJaB/ZZD8XbNjnZs+pRKF0kF2RxFT4O8kfQoU\nke8GmSK6fhAZS+Y58sxLXS83q4s442cjkBw7B4iUiNIdbbhvu+8xJrfoZ0KLW9mz\neod80U72Y5mzErouKsv+OGq+z3c4phmZk1fo2OPtwkFHWoUbUYBKmF3L40zdc54/\nB7o5D2h9AgMBAAECggEACSkxLvAJAyttiTFL51xuQrhseAx1h2pIit3Hb4Dzxd+g\n0G7uEnuQ9UUWVotXjdTtFxF2McyzFY9KLkyfzx1j91Hrs1+FHhr5242x/QeQdzL1\nzw6SAlthtu0q4Wjo/7+hYrZroHeZJ3BSZxH8cwJPSz4SEHZHcx+8wegpIFkGGOM/\nl83vVja8wQdFTjn4wId6Gv4lujEt4kr5za5yrKKFkYS7odxeUYE29qvnxGqWLut1\n5N5c9FbV3X8roRTbIkcL66gSaXFPaLPRBLD3ntORbWl2aeCU/zotVTr7xkRNkUOS\nz3kReXOdDo4ERWa9MPhSb8WBQcfMPx25TSntEX6JcQKBgQDh67bFpeWFKmtbRSRa\nazULiXK0fxCa+UxXzS9ppvjHT968wJtDMc8FMhZKl84CWHEqMOZvs3qDzDa8oX/X\nqhvnOO9i/TZ3b8lGnCMeNRBWVNjt0OLICpFJfvV/+c47jFk6+zynK819ZGhFsTEr\nA8iMsscLfrjfEoeCKlY/JDvQSQKBgQC3mHKlDbdcxPTgxgx7jLHS22/TmiGakdzI\nwXF8+Uu2TAfgqAkop2HAIP03b9w/68Q42Vv/l48TwFa0OjqeRFoRP2kI41V9Etoi\nB9Ugi+UETtpOP3RQzPzaGu0KzvKq1B5wNxANlt5AfieG8I99aky27bsS3D112OE7\n+NXxQmG+lQKBgQCSDjKGSv88fTUUt3mOHxsXD1Ah0rfoiN1LMjLByhmxuTgVrStz\nYIMnJ79zj/q2V3kpvp1rf4voIyEMCBi/U5FghdV1mKAazSFBzfWCNOoP9iCcdtv2\nWaad7j9G8jfbFZwmXoBSzyW1ODGVRL21wmdoVrgJ/W4FgVQr2bUScxlcSQKBgGeD\nvcgQBr14kzUUlT8n4a8oaFGfSqkS6rAKWYmEKcsb7SketSNF1Jh2QS77k+w6a0U+\nUF+4vUP+oyQ03I4Vrc6huP/45V+CvJiJYAJcvgCC0RVjM5rHKR10Jwh8DFiDBrJw\naU2wLZmhR3oOsmidAan2Og71PHXwlXWx5DaGHgRNAoGBAMkUa0AcxNE4xRETiMKt\nAqYXC8UE8hpGw0d3T5WLSh1tLlAbY6XmnwaYY+J61gY9MIZHWJ+ehbaYMQnwK8aS\n8AQzqi9ua5nIw46z2kZ6m1za2XOCkjs9dnohKptZQeWfXWMxVvYvtUK4DT3fF2wJ\nYP0XhKduHtHjQPTJEBI98u8O\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fmckf@blog-3a194.iam.gserviceaccount.com",
  client_id: "105379143374655502309",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fmckf%40blog-3a194.iam.gserviceaccount.com",
};
 */
export const app = initializeApp({
  credential: cert(Account as ServiceAccount),
});