sidebarNodes={"modules":[{"id":"public_key","deprecated":false,"group":"","title":"public_key","sections":[],"nodeGroups":[{"name":"Types: Common","nodes":[{"id":"asn1_type/0","deprecated":false,"title":"asn1_type()","anchor":"t:asn1_type/0"},{"id":"der_encoded/0","deprecated":false,"title":"der_encoded()","anchor":"t:der_encoded/0"},{"id":"digest_type/0","deprecated":false,"title":"digest_type()","anchor":"t:digest_type/0"},{"id":"oid/0","deprecated":false,"title":"oid()","anchor":"t:oid/0"}],"key":"types-common"},{"name":"Types: Keys","nodes":[{"id":"custom_key_opts/0","deprecated":false,"title":"custom_key_opts()","anchor":"t:custom_key_opts/0"},{"id":"dsa_private_key/0","deprecated":false,"title":"dsa_private_key()","anchor":"t:dsa_private_key/0"},{"id":"dsa_public_key/0","deprecated":false,"title":"dsa_public_key()","anchor":"t:dsa_public_key/0"},{"id":"dss_public_key/0","deprecated":false,"title":"dss_public_key()","anchor":"t:dss_public_key/0"},{"id":"ecdsa_private_key/0","deprecated":false,"title":"ecdsa_private_key()","anchor":"t:ecdsa_private_key/0"},{"id":"ecdsa_public_key/0","deprecated":false,"title":"ecdsa_public_key()","anchor":"t:ecdsa_public_key/0"},{"id":"eddsa_private_key/0","deprecated":false,"title":"eddsa_private_key()","anchor":"t:eddsa_private_key/0"},{"id":"eddsa_public_key/0","deprecated":false,"title":"eddsa_public_key()","anchor":"t:eddsa_public_key/0"},{"id":"key_params/0","deprecated":false,"title":"key_params()","anchor":"t:key_params/0"},{"id":"private_key/0","deprecated":false,"title":"private_key()","anchor":"t:private_key/0"},{"id":"public_key/0","deprecated":false,"title":"public_key()","anchor":"t:public_key/0"},{"id":"rsa_private_key/0","deprecated":false,"title":"rsa_private_key()","anchor":"t:rsa_private_key/0"},{"id":"rsa_pss_private_key/0","deprecated":false,"title":"rsa_pss_private_key()","anchor":"t:rsa_pss_private_key/0"},{"id":"rsa_pss_public_key/0","deprecated":false,"title":"rsa_pss_public_key()","anchor":"t:rsa_pss_public_key/0"},{"id":"rsa_public_key/0","deprecated":false,"title":"rsa_public_key()","anchor":"t:rsa_public_key/0"}],"key":"types-keys"},{"name":"Types: PEM files","nodes":[{"id":"pem_entry/0","deprecated":false,"title":"pem_entry()","anchor":"t:pem_entry/0"},{"id":"pki_asn1_type/0","deprecated":false,"title":"pki_asn1_type()","anchor":"t:pki_asn1_type/0"}],"key":"types-pem-files"},{"name":"Types: Certificates","nodes":[{"id":"bad_cert_reason/0","deprecated":false,"title":"bad_cert_reason()","anchor":"t:bad_cert_reason/0"},{"id":"cert/0","deprecated":false,"title":"cert()","anchor":"t:cert/0"},{"id":"cert_id/0","deprecated":false,"title":"cert_id()","anchor":"t:cert_id/0"},{"id":"combined_cert/0","deprecated":false,"title":"combined_cert()","anchor":"t:combined_cert/0"},{"id":"issuer_name/0","deprecated":false,"title":"issuer_name()","anchor":"t:issuer_name/0"},{"id":"policy_node/0","deprecated":false,"title":"policy_node()","anchor":"t:policy_node/0"},{"id":"public_key_info/0","deprecated":false,"title":"public_key_info()","anchor":"t:public_key_info/0"}],"key":"types-certificates"},{"name":"Types: Certificate Revocation","nodes":[{"id":"crl_reason/0","deprecated":false,"title":"crl_reason()","anchor":"t:crl_reason/0"}],"key":"types-certificate-revocation"},{"name":"Types: Test Data","nodes":[{"id":"cert_opt/0","deprecated":false,"title":"cert_opt()","anchor":"t:cert_opt/0"},{"id":"chain_opts/0","deprecated":false,"title":"chain_opts()","anchor":"t:chain_opts/0"},{"id":"conf_opt/0","deprecated":false,"title":"conf_opt()","anchor":"t:conf_opt/0"}],"key":"types-test-data"},{"name":"PEM API","nodes":[{"id":"pem_decode/1","deprecated":false,"title":"pem_decode(PemBin)","anchor":"pem_decode/1"},{"id":"pem_encode/1","deprecated":false,"title":"pem_encode(PemEntries)","anchor":"pem_encode/1"},{"id":"pem_entry_decode/1","deprecated":false,"title":"pem_entry_decode(PemEntry)","anchor":"pem_entry_decode/1"},{"id":"pem_entry_decode/2","deprecated":false,"title":"pem_entry_decode(PemEntry, Password)","anchor":"pem_entry_decode/2"},{"id":"pem_entry_encode/2","deprecated":false,"title":"pem_entry_encode(Asn1Type, Entity)","anchor":"pem_entry_encode/2"},{"id":"pem_entry_encode/3","deprecated":false,"title":"pem_entry_encode(Asn1Type, Entity, InfoPwd)","anchor":"pem_entry_encode/3"}],"key":"pem-api"},{"name":"Key API","nodes":[{"id":"compute_key/2","deprecated":false,"title":"compute_key(OthersECDHkey, MyECDHkey)","anchor":"compute_key/2"},{"id":"compute_key/3","deprecated":false,"title":"compute_key(OthersDHkey, MyDHkey, DHparms)","anchor":"compute_key/3"},{"id":"dh_gex_group/4","deprecated":false,"title":"dh_gex_group(MinSize, SuggestedSize, MaxSize, Groups)","anchor":"dh_gex_group/4"},{"id":"generate_key/1","deprecated":false,"title":"generate_key/1","anchor":"generate_key/1"}],"key":"key-api"},{"name":"Sign/Verify API","nodes":[{"id":"pkix_sign/2","deprecated":false,"title":"pkix_sign(Cert, Key)","anchor":"pkix_sign/2"},{"id":"pkix_verify/2","deprecated":false,"title":"pkix_verify(Cert, Key)","anchor":"pkix_verify/2"},{"id":"sign/3","deprecated":false,"title":"sign(Msg, DigestType, Key)","anchor":"sign/3"},{"id":"sign/4","deprecated":false,"title":"sign(Msg, DigestType, Key, Options)","anchor":"sign/4"},{"id":"verify/4","deprecated":false,"title":"verify(Msg, DigestType, Signature, Key)","anchor":"verify/4"},{"id":"verify/5","deprecated":false,"title":"verify(Msg, DigestType, Signature, Key, Options)","anchor":"verify/5"}],"key":"sign-verify-api"},{"name":"Certificate API","nodes":[{"id":"cacerts_clear/0","deprecated":false,"title":"cacerts_clear()","anchor":"cacerts_clear/0"},{"id":"cacerts_get/0","deprecated":false,"title":"cacerts_get()","anchor":"cacerts_get/0"},{"id":"cacerts_load/0","deprecated":false,"title":"cacerts_load()","anchor":"cacerts_load/0"},{"id":"cacerts_load/1","deprecated":false,"title":"cacerts_load(File)","anchor":"cacerts_load/1"},{"id":"pkix_decode_cert/2","deprecated":false,"title":"pkix_decode_cert(Cert, Type)","anchor":"pkix_decode_cert/2"},{"id":"pkix_encode/3","deprecated":false,"title":"pkix_encode(Asn1Type, Entity, Type)","anchor":"pkix_encode/3"},{"id":"pkix_hash_type/1","deprecated":false,"title":"pkix_hash_type(HashOid)","anchor":"pkix_hash_type/1"},{"id":"pkix_is_fixed_dh_cert/1","deprecated":false,"title":"pkix_is_fixed_dh_cert(Cert)","anchor":"pkix_is_fixed_dh_cert/1"},{"id":"pkix_is_issuer/2","deprecated":false,"title":"pkix_is_issuer(CertorCRL, IssuerCert)","anchor":"pkix_is_issuer/2"},{"id":"pkix_is_self_signed/1","deprecated":false,"title":"pkix_is_self_signed(Cert)","anchor":"pkix_is_self_signed/1"},{"id":"pkix_issuer_id/2","deprecated":false,"title":"pkix_issuer_id(Cert, IssuedBy)","anchor":"pkix_issuer_id/2"},{"id":"pkix_normalize_name/1","deprecated":false,"title":"pkix_normalize_name(Issuer)","anchor":"pkix_normalize_name/1"},{"id":"pkix_path_validation/3","deprecated":false,"title":"pkix_path_validation(Cert, CertChain, Options)","anchor":"pkix_path_validation/3"},{"id":"pkix_sign_types/1","deprecated":false,"title":"pkix_sign_types(AlgorithmId)","anchor":"pkix_sign_types/1"},{"id":"pkix_subject_id/1","deprecated":false,"title":"pkix_subject_id(Cert)","anchor":"pkix_subject_id/1"},{"id":"pkix_verify_hostname/2","deprecated":false,"title":"pkix_verify_hostname(Cert, ReferenceIDs)","anchor":"pkix_verify_hostname/2"},{"id":"pkix_verify_hostname/3","deprecated":false,"title":"pkix_verify_hostname(Cert, ReferenceIDs, Options)","anchor":"pkix_verify_hostname/3"},{"id":"pkix_verify_hostname_match_fun/1","deprecated":false,"title":"pkix_verify_hostname_match_fun(Protocol)","anchor":"pkix_verify_hostname_match_fun/1"}],"key":"certificate-api"},{"name":"Certificate Revocation API","nodes":[{"id":"pkix_crl_issuer/1","deprecated":false,"title":"pkix_crl_issuer(CRL)","anchor":"pkix_crl_issuer/1"},{"id":"pkix_crl_verify/2","deprecated":false,"title":"pkix_crl_verify(CRL, Cert)","anchor":"pkix_crl_verify/2"},{"id":"pkix_crls_validate/3","deprecated":false,"title":"pkix_crls_validate(OTPcertificate, DPandCRLs, Options)","anchor":"pkix_crls_validate/3"},{"id":"pkix_dist_point/1","deprecated":false,"title":"pkix_dist_point(Cert)","anchor":"pkix_dist_point/1"},{"id":"pkix_dist_points/1","deprecated":false,"title":"pkix_dist_points(Cert)","anchor":"pkix_dist_points/1"},{"id":"pkix_match_dist_point/2","deprecated":false,"title":"pkix_match_dist_point(CRL, DistPoint)","anchor":"pkix_match_dist_point/2"},{"id":"pkix_ocsp_validate/5","deprecated":false,"title":"pkix_ocsp_validate(Cert, IssuerCert, OcspRespDer, NonceExt, Options)","anchor":"pkix_ocsp_validate/5"},{"id":"short_name_hash/1","deprecated":false,"title":"short_name_hash(Name)","anchor":"short_name_hash/1"}],"key":"certificate-revocation-api"},{"name":"ASN.1 Encoding API","nodes":[{"id":"der_decode/2","deprecated":false,"title":"der_decode(Asn1Type, Der)","anchor":"der_decode/2"},{"id":"der_encode/2","deprecated":false,"title":"der_encode(Asn1Type, Entity)","anchor":"der_encode/2"}],"key":"asn-1-encoding-api"},{"name":"Test Data API","nodes":[{"id":"pkix_test_data/1","deprecated":false,"title":"pkix_test_data(ChainConf)","anchor":"pkix_test_data/1"},{"id":"pkix_test_root_cert/2","deprecated":false,"title":"pkix_test_root_cert(Name, Options)","anchor":"pkix_test_root_cert/2"}],"key":"test-data-api"},{"name":"Legacy RSA Encryption API","nodes":[{"id":"decrypt_private/2","deprecated":false,"title":"decrypt_private(CipherText, Key)","anchor":"decrypt_private/2"},{"id":"decrypt_private/3","deprecated":false,"title":"decrypt_private(CipherText, Key, Options)","anchor":"decrypt_private/3"},{"id":"decrypt_public/2","deprecated":false,"title":"decrypt_public(CipherText, Key)","anchor":"decrypt_public/2"},{"id":"decrypt_public/3","deprecated":false,"title":"decrypt_public(CipherText, Key, Options)","anchor":"decrypt_public/3"},{"id":"encrypt_private/2","deprecated":false,"title":"encrypt_private(PlainText, Key)","anchor":"encrypt_private/2"},{"id":"encrypt_private/3","deprecated":false,"title":"encrypt_private(PlainText, Key, Options)","anchor":"encrypt_private/3"},{"id":"encrypt_public/2","deprecated":false,"title":"encrypt_public(PlainText, Key)","anchor":"encrypt_public/2"},{"id":"encrypt_public/3","deprecated":false,"title":"encrypt_public(PlainText, Key, Options)","anchor":"encrypt_public/3"}],"key":"legacy-rsa-encryption-api"}]}],"extras":[{"id":"api-reference","group":"","title":"API Reference","headers":[{"id":"Modules","anchor":"modules"}]},{"id":"public_key_app","group":"","title":"Public_Key Application","headers":[{"id":"Supported PKIX functionality","anchor":"supported-pkix-functionality"},{"id":"Dependencies","anchor":"dependencies"},{"id":"Error Logger and Event Handlers","anchor":"error-logger-and-event-handlers"},{"id":"See Also","anchor":"see-also"}]},{"id":"notes","group":"","title":"Public_Key Release Notes","headers":[{"id":"Public_Key 1.16.3","anchor":"public_key-1-16-3"},{"id":"Public_Key 1.16.2","anchor":"public_key-1-16-2"},{"id":"Public_Key 1.16.1","anchor":"public_key-1-16-1"},{"id":"Public_Key 1.16","anchor":"public_key-1-16"},{"id":"Public_Key 1.15.1.2","anchor":"public_key-1-15-1-2"},{"id":"Public_Key 1.15.1.1","anchor":"public_key-1-15-1-1"},{"id":"Public_Key 1.15.1","anchor":"public_key-1-15-1"},{"id":"Public_Key 1.15","anchor":"public_key-1-15"},{"id":"Public_Key 1.14.1","anchor":"public_key-1-14-1"},{"id":"Public_Key 1.14","anchor":"public_key-1-14"},{"id":"Public_Key 1.13.3.2","anchor":"public_key-1-13-3-2"},{"id":"Public_Key 1.13.3.1","anchor":"public_key-1-13-3-1"},{"id":"Public_Key 1.13.3","anchor":"public_key-1-13-3"},{"id":"Public_Key 1.13.2","anchor":"public_key-1-13-2"},{"id":"Public_Key 1.13.1","anchor":"public_key-1-13-1"},{"id":"Public_Key 1.13","anchor":"public_key-1-13"},{"id":"Public_Key 1.12.0.2","anchor":"public_key-1-12-0-2"},{"id":"Public_Key 1.12.0.1","anchor":"public_key-1-12-0-1"},{"id":"Public_Key 1.12","anchor":"public_key-1-12"},{"id":"Public_Key 1.11.3","anchor":"public_key-1-11-3"},{"id":"Public_Key 1.11.2","anchor":"public_key-1-11-2"},{"id":"Public_Key 1.11.1","anchor":"public_key-1-11-1"},{"id":"Public_Key 1.11","anchor":"public_key-1-11"},{"id":"Public_Key 1.10.0.1","anchor":"public_key-1-10-0-1"},{"id":"Public_Key 1.10","anchor":"public_key-1-10"},{"id":"Public_Key 1.9.2","anchor":"public_key-1-9-2"},{"id":"Public_Key 1.9.1","anchor":"public_key-1-9-1"},{"id":"Public_Key 1.9","anchor":"public_key-1-9"},{"id":"Public_Key 1.8","anchor":"public_key-1-8"},{"id":"Public_Key 1.7.2","anchor":"public_key-1-7-2"},{"id":"Public_Key 1.7.1","anchor":"public_key-1-7-1"},{"id":"Public_Key 1.7","anchor":"public_key-1-7"},{"id":"Public_Key 1.6.7","anchor":"public_key-1-6-7"},{"id":"Public_Key 1.6.6.1","anchor":"public_key-1-6-6-1"},{"id":"Public_Key 1.6.6","anchor":"public_key-1-6-6"},{"id":"Public_Key 1.6.5","anchor":"public_key-1-6-5"},{"id":"Public_Key 1.6.4","anchor":"public_key-1-6-4"},{"id":"Public_Key 1.6.3","anchor":"public_key-1-6-3"},{"id":"Public_Key 1.6.2","anchor":"public_key-1-6-2"},{"id":"Public_Key 1.6.1","anchor":"public_key-1-6-1"},{"id":"Public_Key 1.6","anchor":"public_key-1-6"},{"id":"Public_Key 1.5.2","anchor":"public_key-1-5-2"},{"id":"Public_Key 1.5.1","anchor":"public_key-1-5-1"},{"id":"Public_Key 1.5","anchor":"public_key-1-5"},{"id":"Public_Key 1.4.1","anchor":"public_key-1-4-1"},{"id":"Public_Key 1.4","anchor":"public_key-1-4"},{"id":"Public_Key 1.3","anchor":"public_key-1-3"},{"id":"Public_Key 1.2","anchor":"public_key-1-2"},{"id":"Public_Key 1.1.1","anchor":"public_key-1-1-1"},{"id":"Public_Key 1.1","anchor":"public_key-1-1"},{"id":"Public_Key 1.0.1","anchor":"public_key-1-0-1"},{"id":"Public_Key 1.0","anchor":"public_key-1-0"},{"id":"Public_Key 0.23","anchor":"public_key-0-23"},{"id":"Public_Key 0.22.1","anchor":"public_key-0-22-1"},{"id":"Public_Key 0.22","anchor":"public_key-0-22"},{"id":"Public_Key 0.21","anchor":"public_key-0-21"},{"id":"Public_Key 0.20","anchor":"public_key-0-20"},{"id":"Public_Key 0.19","anchor":"public_key-0-19"},{"id":"Public_Key 0.18","anchor":"public_key-0-18"},{"id":"Public_Key 0.17","anchor":"public_key-0-17"},{"id":"Public_Key 0.16","anchor":"public_key-0-16"},{"id":"Public_Key 0.15","anchor":"public_key-0-15"},{"id":"Public_Key 0.14","anchor":"public_key-0-14"},{"id":"Public_Key 0.13","anchor":"public_key-0-13"},{"id":"Public_Key 0.12","anchor":"public_key-0-12"},{"id":"Public_Key 0.11","anchor":"public_key-0-11"},{"id":"Public_Key 0.10","anchor":"public_key-0-10"},{"id":"Public_Key 0.9","anchor":"public_key-0-9"},{"id":"Public_Key 0.8","anchor":"public_key-0-8"},{"id":"Public_Key 0.7","anchor":"public_key-0-7"},{"id":"Public_Key 0.6","anchor":"public_key-0-6"},{"id":"Public_Key 0.5","anchor":"public_key-0-5"},{"id":"Public_Key 0.4","anchor":"public_key-0-4"},{"id":"Public_Key 0.3","anchor":"public_key-0-3"},{"id":"Public_Key 0.2","anchor":"public_key-0-2"},{"id":"Public_Key 0.1","anchor":"public_key-0-1"}]},{"id":"public_key_records","group":"User's Guides","title":"Public-Key Records","headers":[{"id":"Data Types","anchor":"data-types"},{"id":"RSA","anchor":"rsa"},{"id":"DSA","anchor":"dsa"},{"id":"ECDSA and EDDSA","anchor":"ecdsa-and-eddsa"},{"id":"PKIX Certificates","anchor":"pkix-certificates"},{"id":"Standard Certificate Extensions","anchor":"standard-certificate-extensions"},{"id":"Private Internet Extensions","anchor":"private-internet-extensions"},{"id":"CRL and CRL Extensions Profile","anchor":"crl-and-crl-extensions-profile"}]},{"id":"using_public_key","group":"User's Guides","title":"Examples","headers":[{"id":"PEM Files","anchor":"pem-files"},{"id":"RSA Public-Key Cryptography","anchor":"rsa-public-key-cryptography"},{"id":"Digital Signatures","anchor":"digital-signatures"},{"id":"Verifying a certificate hostname","anchor":"verifying-a-certificate-hostname"}]}],"tasks":[]}