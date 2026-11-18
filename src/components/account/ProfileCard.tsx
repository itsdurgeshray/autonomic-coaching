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

/** Design system card with the profile fields, read-only until Edit profile is pressed */
export function ProfileCard({ profile, email, copy, profileText, onSignOut }: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(profile);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [status, setStatus] = useState('');
  const uid = useId();

  function save(e: React.FormEvent) {
    e.preventDefault();
    const next = validateProfile(form, profileText.fields);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) return document.getElementById(`${uid}-${first}`)?.focus();
    accountActions.saveProfile(form);
    setIsEditing(false);
    setStatus(copy.saved);
  }

  return (
    <section id="profile" aria-labelledby="profile-title" className="ds-card scroll-mt-6">
      <form noValidate onSubmit={save}>
        <div className="ds-card-head flex-col !items-start !py-5 sm:flex-row sm:!items-center md:!px-6">
          <div>
            <h2 id="profile-title" className="ds-t-title">
              {copy.editTitle}
            </h2>
            <p className="ds-t-14 ds-c-2 mt-1">{copy.editIntro}</p>
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            {isEditing ? (
              <>
                <Button
                  variant="ghost"
                  size="md"
                  className="flex-1 sm:flex-none"
                  onClick={() => {
                    setForm(profile);
                    setErrors({});
                    setIsEditing(false);
                  }}
                >
                  {copy.cancel}
                </Button>
                <Button type="submit" size="md" className="flex-1 sm:flex-none">
                  {copy.save}
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  size="md"
                  className="flex-1 sm:flex-none"
                  onClick={() => {
                    setForm(profile);
                    setStatus('');
                    setIsEditing(true);
                  }}
                >
                  <Icon name="i-pencil-simple" className="ds-ico" />
                  {copy.edit}
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
              </>
            )}
          </div>
        </div>
        <div className="ds-card-pad">
          <ProfileFields
            uid={uid}
            form={form}
            errors={errors}
            fields={profileText.fields}
            optionalLabel={profileText.optional}
            onChange={(k, v) => setForm((p) => ({ ...p, [k]: v }))}
            isReadOnly={!isEditing}
            email={{ label: copy.email, value: email }}
            emptyLabel={copy.none}
            layout="account"
          />
          <p role="status" aria-live="polite" className="ds-t-14 text-g-700 mt-4 empty:hidden">
            {status}
          </p>
        </div>
      </form>
    </section>
  );
}
