export const Custom404 = () => <div></div>

export const getServerSideProps = () => {
  return { redirect: { destination: '/', permanent: false } }
}

export default Custom404
