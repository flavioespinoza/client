export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;

export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type Email = {
	__typename?: 'Email';
	_pnMetadata?: Maybe<PnMetadata>;
	endDate?: Maybe<Scalars['String']>;
	startDate?: Maybe<Scalars['String']>;
	type: Scalars['String'];
	value: Scalars['String'];
};

export enum Gender {
	M = 'M',
	F = 'F'
}

export type Identifier = {
	__typename?: 'Identifier';
	SSNs?: Maybe<Array<Maybe<Ssn>>>;
	emails?: Maybe<Array<Maybe<Email>>>;
	phoneNumbers?: Maybe<Array<Maybe<PhoneNumber>>>;
	type: Scalars['String'];
};

export type Name = {
	__typename?: 'Name';
	_pnMetadata?: Maybe<PnMetadata>;
	additionlName?: Maybe<Scalars['String']>;
	endDate?: Maybe<Scalars['String']>;
	familyName?: Maybe<Scalars['String']>;
	fullName?: Maybe<Scalars['String']>;
	givenName?: Maybe<Scalars['String']>;
	honorificPrefix?: Maybe<Scalars['String']>;
	honorificSuffix?: Maybe<Scalars['String']>;
	startDate?: Maybe<Scalars['String']>;
	type: Scalars['String'];
	use?: Maybe<Array<Maybe<NameUse>>>;
};

export enum NameUse {
	Alias = 'ALIAS',
	Primary = 'PRIMARY'
}

export type Person = {
	__typename?: 'Person';
	_pnMetadata?: Maybe<PnMetadata>;
	birthDate?: Maybe<Scalars['String']>;
	gender?: Maybe<Gender>;
	id: Scalars['ID'];
	identifiers?: Maybe<Identifier>;
	names?: Maybe<Array<Maybe<Name>>>;
	postalAddresses?: Maybe<Array<Maybe<PostalAddress>>>;
	recordID?: Maybe<Scalars['String']>;
	sourceID?: Maybe<Scalars['String']>;
	type: Scalars['String'];
};

export type PhoneNumber = {
	__typename?: 'PhoneNumber';
	_pnMetadata?: Maybe<PnMetadata>;
	endDate?: Maybe<Scalars['String']>;
	startDate?: Maybe<Scalars['String']>;
	type: Scalars['String'];
	use?: Maybe<Array<Maybe<PhoneNumberUse>>>;
	value: Scalars['String'];
};

export enum PhoneNumberUse {
	Home = 'HOME',
	Work = 'WORK',
	Cell = 'CELL'
}

export type PnMetadata = {
	__typename?: 'PNMetadata';
	someMetadata?: Maybe<Scalars['String']>;
};

export type PostalAddress = {
	__typename?: 'PostalAddress';
	_pnMetadata?: Maybe<PnMetadata>;
	addressCountry?: Maybe<Scalars['String']>;
	addressFull?: Maybe<Scalars['String']>;
	addressLocality?: Maybe<Scalars['String']>;
	addressRegion?: Maybe<Scalars['String']>;
	endDate?: Maybe<Scalars['String']>;
	postOfficeBoxNumber?: Maybe<Scalars['String']>;
	postalCode?: Maybe<Scalars['String']>;
	startDate?: Maybe<Scalars['String']>;
	streetAddress?: Maybe<Scalars['String']>;
	type: Scalars['String'];
	use?: Maybe<Array<Maybe<PostalAddressUse>>>;
};

export enum PostalAddressUse {
	Home = 'HOME',
	Work = 'WORK',
	Mail = 'MAIL',
	Billing = 'BILLING'
}

export type Query = {
	__typename?: 'Query';
	person?: Maybe<Person>;
	persons?: Maybe<Array<Maybe<Person>>>;
};

export type QueryPersonArgs = {
	email?: Maybe<Scalars['String']>;
	phoneNumber?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	address?: Maybe<Scalars['String']>;
	birthDate?: Maybe<Scalars['String']>;
};

export type QueryPersonsArgs = {
	phoneNumber?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	address?: Maybe<Scalars['String']>;
	birthDate?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
};

export type Ssn = {
	__typename?: 'SSN';
	_pnMetadata?: Maybe<PnMetadata>;
	endDate?: Maybe<Scalars['String']>;
	startDate?: Maybe<Scalars['String']>;
	type: Scalars['String'];
	use?: Maybe<PhoneNumberUse>;
	value: Scalars['String'];
};
