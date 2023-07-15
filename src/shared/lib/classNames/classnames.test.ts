import { classNames } from './classNames';

describe('classnames', () => {
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });
    test('with additional class', () => {
        const fn = classNames('someClass', {}, ['class1', 'class2']);
        const expected = 'someClass class1 class2';
        expect(fn).toBe(expected);
    });
    test('with modes true', () => {
        const fn = classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(fn).toBe(expected);
    });
    test('with mode false', () => {
        const fn = classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered';
        expect(fn).toBe(expected);
    });
    test('with mode undefined', () => {
        const fn = classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered';
        expect(fn).toBe(expected);
    });
});
