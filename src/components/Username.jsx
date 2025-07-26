import { useUsername } from "../hooks/useUsername";

export default function Username({ prefix = "Welcome " }) {
  const { username, loading } = useUsername();

  if (loading) return <span>Loading…</span>;
  if (!username) return  <span>Guest</span>;

  return (
    <span>
      {prefix}
      {username}!
    </span>
  );
}
