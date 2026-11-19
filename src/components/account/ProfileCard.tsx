'use client';

import { useId, useState } from 'react';
import { ProfileFields } from '@/components/account/ProfileFields';
import { validateProfile, type ProfileErrors } from '@/components/account/ProfileForm';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { accountActions } from '@/lib/account/store';
import type { Profile } from '@/lib/account/types';
import type { accountCopy, profileCopy } from '@/content/account';

export type ProfileCardProps = {
  profile: Profile;
  email: string;
  copy: typeof accountCopy;
  profileText: typeof profileCopy;
  onSignOut: () => void;
};

const same = (a: Profile, b: Profile) => JSON.stringify(a) === JSON.stringify(b);

/**
 * Profile as in the account design: a tinted card head with Edit profile and Sign out,
 * read-only fields until Edit is pressed, and Save profile below the card once something changes.
 */
export function ProfileCard({ profile, email, copy, profileText, onSignOut }: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(profile);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [status, setStatus] = useState('');
  const uid = useId();
  const isDirty = isEditing && !same(form, profile);

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!isDirty) return;
    const next = validateProfile(form, profileText.fields);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) return document.getElementById(`${uid}-${first}`)?.focus();
    accountActions.saveProfile({ ...form, fullName: form.fullName.trim() });
    setIsEditing(false);
    setStatus(copy.saved);
  }

  function toggleEdit() {
    setForm(profile);
    setErrors({});
    setStatus('');
    setIsEditing((v) => !v);
  }

  return (
    <form
      id="profile"
      noValidate
      onSubmit={save}
      className="scroll-mt-24"
      aria-labelledby="profile-title"
    >
      <section className="ds-card overflow-hidden">
        <div className="bg-page border-line-2 flex flex-col gap-4 border-b px-4 py-5 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div>
            <h2 id="profile-title" className="ds-t-title">
              {copy.editTitle}
            </h2>
            <p className="ds-t-14 ds-c-2 mt-1">{copy.editIntro}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="md"
              className="flex-1 sm:flex-none"
              onClick={toggleEdit}
            >
              <Icon name={isEditing ? 'i-x' : 'i-pencil-simple'} className="ds-ico" />
              {isEditing ? copy.cancel : copy.edit}
            </Button>
            <Button
              variant="dangerSoft"
              size="md"
              className="flex-1 sm:flex-none"
              onClick={onSignOut}
            >
              <Icon name="i-sign-out" className="ds-ico" />
              {copy.signOut}
            </Button>
          </div>
        </div>
        <div className="px-4 py-6 md:px-6">
          <ProfileFields
            uid={uid}
            form={form}
            errors={errors}
            fields={profileText.fields}
            optionalLabel={profileText.optional}
            onChange={(k, v) => {
              setForm((p) => ({ ...p, [k]: v }));
              if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
            }}
            isReadOnly={!isEditing}
            email={{ label: copy.email, value: email }}
            emptyLabel={copy.none}
            notAddedLabel={copy.notAdded}
            layout="account"
          />
        </div>
      </section>
      <div className="mt-4 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
        <p role="status" aria-live="polite" className="ds-t-14 text-g-700 empty:hidden sm:mr-auto">
          {status}
        </p>
        <Button type="submit" size="lg" disabled={!isDirty} className="sm:min-w-[160px]">
          {copy.save}
        </Button>
      </div>
    </form>
  );
}
