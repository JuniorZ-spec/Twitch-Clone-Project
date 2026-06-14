import Link from "next/link";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import { getUserByUsername } from "@/lib/user-service";
import { StreamPlayer } from "@/components/stream-player";

interface CreatorPageProps {
  params: {
    username: string;
  };
};

const CreatorPage = async ({
  params,
}: CreatorPageProps) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (!user || !externalUser || user.externalUserId !== externalUser.id) {
    return redirect("/");
  }

  if (!user.stream) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 px-4 text-center text-muted-foreground">
        <p className="text-xl font-semibold text-foreground">Aucun stream actif</p>
        <p className="max-w-md">
          Vous n’avez pas encore de stream configuré pour ce dashboard. Utilisez les onglets Keys, Chat ou Community pour gérer votre chaîne.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href={`/u/${params.username}/keys`} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
            Gérer les clés
          </Link>
          <Link href="/" className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <StreamPlayer
        user={user}
        stream={user.stream}
        isFollowing
      />
    </div>
  );
}

export default CreatorPage;