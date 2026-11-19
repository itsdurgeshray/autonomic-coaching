'use client';

import { Fragment } from 'react';
import { cn } from '@/lib/cn';
import { Field, describedBy } from '@/components/ui/Field';
import { PhoneInput } from '@/components/ui/PhoneInput';
import { SelectInput } from '@/components/ui/SelectInput';
import { TagInput } from '@/components/ui/TagInput';
import { TextInput } from '@/components/ui/TextInput';
import type { Profile } from '@/lib/account/types';
import type { profileCopy } from '@/content/account';
import type { ProfileErrors } from '@/components/account/ProfileForm';

export type ProfileFieldsProps = {
  /** Prefix for field ids, unique per form */
  uid: string;
  form: Profile;
  errors: ProfileErrors;
  fields: typeof profileCopy.fields;
  optionalLabel: string;
  onChange: <K extends keyof Profile>(k: K, v: Profile[K]) => void;
  isReadOnly?: boolean;
  /** Extra read-only email row on the account page */
  email?: { label: string; value: string };
  emptyLabel?: string;
  /** Shown in empty read-only fields instead of the example placeholder */
  notAddedLabel?: string;
  /** account: the wider grid from the account design (name and sex, email and phone, then weight, height and date of birth) */
  layout?: 'form' | 'account';
  className?: string;
};

const digits = (v: string) => v.replace(/[^\d.]/g, '');

/** The profile fields, shared by sign-up and the account page: compact design system fields */
export function ProfileFields({
  uid,
  form,
  errors,
  fields: f,
  optionalLabel,
  onChange,
  isReadOnly,
  email,
  emptyLabel,
  notAddedLabel,
  layout = 'form',
  className,
}: ProfileFieldsProps) {
  const wide = layout === 'account';
  const span = (formCls: string, accountCls: string) => (wide ? accountCls : formCls);
  const id = (k: string) => `${uid}-${k}`;
  const opt = isReadOnly ? undefined : optionalLabel;
  const ph = (example?: string) => (isReadOnly ? notAddedLabel : example);
  const err = (k: keyof Profile) => ({
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': describedBy(id(k), undefined, errors[k]),
  });

  const nodes: Record<string, React.ReactNode> = {
    fullName: (
      <Field
        id={id('fullName')}
        label={f.fullName.label}
        error={errors.fullName}
        isRequired
        isCompact
        className={span('sm:col-span-2', 'lg:col-span-3')}
      >
        <TextInput
          id={id('fullName')}
          scale="md"
          autoComplete="name"
          placeholder={ph(f.fullName.placeholder)}
          readOnly={isReadOnly}
          value={form.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          required
          {...err('fullName')}
        />
      </Field>
    ),
    email: email ? (
      <Field
        id={id('email')}
        label={email.label}
        isCompact
        className={span('sm:col-span-2', 'lg:col-span-3')}
      >
        <TextInput id={id('email')} scale="md" type="email" readOnly value={email.value} />
      </Field>
    ) : null,
    dateOfBirth: (
      <Field
        id={id('dateOfBirth')}
        label={f.dateOfBirth.label}
        error={errors.dateOfBirth}
        isRequired
        isCompact
        className={span('', 'lg:col-span-2')}
      >
        <TextInput
          id={id('dateOfBirth')}
          scale="md"
          type="date"
          autoComplete="bday"
          readOnly={isReadOnly}
          value={form.dateOfBirth}
          onChange={(e) => onChange('dateOfBirth', e.target.value)}
          required
          {...err('dateOfBirth')}
        />
      </Field>
    ),
    sex: (
      <Field
        id={id('sex')}
        label={f.sex.label}
        error={errors.sex}
        isRequired
        isCompact
        className={span('', 'lg:col-span-3')}
      >
        <SelectInput
          id={id('sex')}
          scale="md"
          options={f.sex.options}
          placeholder={f.sex.placeholder}
          isReadOnly={isReadOnly}
          value={form.sex}
          onChange={(e) => onChange('sex', e.target.value as Profile['sex'])}
          required
          {...err('sex')}
        />
      </Field>
    ),
    heightCm: (
      <Field
        id={id('heightCm')}
        label={f.heightCm.label}
        optionalLabel={opt}
        isCompact
        className={span('', 'lg:col-span-2')}
      >
        <TextInput
          id={id('heightCm')}
          scale="md"
          inputMode="decimal"
          unit={f.heightCm.unit}
          placeholder={ph(f.heightCm.placeholder)}
          readOnly={isReadOnly}
          value={form.heightCm}
          onChange={(e) => onChange('heightCm', digits(e.target.value))}
        />
      </Field>
    ),
    weightKg: (
      <Field
        id={id('weightKg')}
        label={f.weightKg.label}
        optionalLabel={opt}
        isCompact
        className={span('', 'lg:col-span-2')}
      >
        <TextInput
          id={id('weightKg')}
          scale="md"
          inputMode="decimal"
          unit={f.weightKg.unit}
          placeholder={ph(f.weightKg.placeholder)}
          readOnly={isReadOnly}
          value={form.weightKg}
          onChange={(e) => onChange('weightKg', digits(e.target.value))}
        />
      </Field>
    ),
    phone: (
      <Field
        id={id('phone')}
        label={f.phone.label}
        optionalLabel={opt}
        isCompact
        className={span('sm:col-span-2', 'lg:col-span-3')}
      >
        <PhoneInput
          id={id('phone')}
          value={form.phone}
          onChange={(v) => onChange('phone', v)}
          codes={f.phone.codes}
          codeLabel={f.phone.codeLabel}
          defaultCode={f.phone.defaultCode}
          placeholder={ph(f.phone.placeholder)}
          isReadOnly={isReadOnly}
        />
      </Field>
    ),
    conditions: (
      <Field
        id={id('conditions')}
        label={f.conditions.label}
        hint={isReadOnly ? undefined : f.conditions.hint}
        isCompact
        className={span('sm:col-span-2', 'sm:col-span-2 lg:col-span-6')}
      >
        <TagInput
          id={id('conditions')}
          scale="md"
          value={form.conditions}
          onChange={(v) => onChange('conditions', v)}
          placeholder={f.conditions.placeholder}
          removeLabel={f.conditions.remove}
          isReadOnly={isReadOnly}
          emptyLabel={emptyLabel}
          describedBy={describedBy(id('conditions'), isReadOnly ? undefined : f.conditions.hint)}
        />
      </Field>
    ),
  };
  /* The account design pairs name with sex and email with phone, then the body measures; sign-up keeps the natural reading order */
  const order = wide
    ? ['fullName', 'sex', 'email', 'phone', 'weightKg', 'heightCm', 'dateOfBirth', 'conditions']
    : ['fullName', 'email', 'dateOfBirth', 'sex', 'heightCm', 'weightKg', 'phone', 'conditions'];
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2',
        wide && 'lg:grid-cols-6',
        className,
      )}
    >
      {order.map((k) => nodes[k] && <Fragment key={k}>{nodes[k]}</Fragment>)}
    </div>
  );
}
