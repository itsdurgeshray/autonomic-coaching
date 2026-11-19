'use client';

import { useId, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProfileFields } from '@/components/account/ProfileFields';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { accountActions, useAccount } from '@/lib/account/store';
import type { Profile } from '@/lib/account/types';
import type { profileCopy } from '@/content/account';

export type ProfileFormProps = { copy: typeof profileCopy };

const EMPTY: Profile = {
  fullName: '',
  dateOfBirth: '',
  sex: '',
  phone: '',
  heightCm: '',
  weightKg: '',
  conditions: [],
};
export type ProfileErrors = Partial<Record<keyof Profile, string>>;

export function validateProfile(p: Profile, f: typeof profileCopy.fields): ProfileErrors {
  const e: ProfileErrors = {};
  if (!p.fullName.trim()) e.fullName = f.fullName.error;
  if (!p.dateOfBirth) e.dateOfBirth = f.dateOfBirth.error;
  if (!p.sex) e.sex = f.sex.error;
  return e;
}

export function ProfileForm({ copy }: ProfileFormProps) {
  const router = useRouter();
  const account = useAccount();
  const [form, setForm] = useState<Profile>(() => account.profile ?? EMPTY);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const uid = useId();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateProfile(form, copy.fields);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    accountActions.saveProfile({ ...form, fullName: form.fullName.trim() });
    router.push('/onboarding/fit-check');
  }

  return (
    <form noValidate onSubmit={onSubmit} className="my-auto flex flex-col py-10 lg:py-12">
      <div className="flex flex-col items-center text-center">
        <p className="ds-t-12 ds-c-3 ds-num">{copy.step}</p>
        <Heading as="h1" look="page" className="mt-1">
          {copy.title}
        </Heading>
        <p className="ds-t-14 ds-c-2 mt-2 max-w-[48ch]">
          {copy.signedInAs} <strong className="ds-w-500 text-ink">{account.session?.email}</strong>.{' '}
          {copy.enterDetails}{' '}
          <button
            type="button"
            className="ds-link ds-ink"
            onClick={() => {
              accountActions.signOut();
              router.push('/login');
            }}
          >
            {copy.changeAccount}
          </button>
          .
        </p>
      </div>

      <ProfileFields
        uid={uid}
        form={form}
        errors={errors}
        fields={copy.fields}
        optionalLabel={copy.optional}
        onChange={(k, v) => {
          setForm((p) => ({ ...p, [k]: v }));
          if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
        }}
        className="mt-8"
      />

      {Object.values(errors).some(Boolean) && (
        <p role="alert" className="ds-f-error mt-6 justify-center">
          <Icon name="i-warning-circle" className="ds-ico" />
          {copy.errorSummary}
        </p>
      )}

      <div className="mt-8 flex flex-col items-center gap-3">
        <Button type="submit" size="xl" isBlock className="sm:w-auto sm:min-w-[280px]">
          {copy.submit}
        </Button>
        <p className="ds-t-12 ds-c-3 flex items-center gap-1.5">
          <Icon name="i-lock-simple" className="ds-ico text-g-700 text-[14px]" />
          {copy.privacyNote}
        </p>
      </div>
    </form>
  );
}
