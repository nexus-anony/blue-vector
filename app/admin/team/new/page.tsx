import TeamForm from "../TeamForm";
import { createTeamAction } from "../actions";

export default function NewTeamMemberPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">
          New team member
        </h1>
        <p className="mt-1 text-sm text-[var(--ink-soft)]">
          Add a new founding or staff profile.
        </p>
      </div>
      <TeamForm action={createTeamAction} submitLabel="Create" />
    </div>
  );
}
