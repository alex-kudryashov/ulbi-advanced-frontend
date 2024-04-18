import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first parameter', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with empty second an third parameter', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });
    test('with filled third parameter', () => {
        expect(classNames('someClass', {}, ['additional']))
            .toBe('someClass additional');
    });
    test('with mode true', () => {
        expect(classNames('someClass', { disabled: true }, []))
            .toBe('someClass disabled');
    });
    test('with mode false', () => {
        expect(classNames('someClass', { disabled: false }, []))
            .toBe('someClass');
    });
    test('with mods and additionals', () => {
        expect(classNames(
            'someClass',
            { disabled: false, hovered: true, scrollable: undefined },
            ['add1', 'add2'],
        ))
            .toBe('someClass add1 add2 hovered');
    });
});
